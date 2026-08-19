import zlib, struct, sys
from collections import Counter

def load_png(path):
    with open(path, "rb") as f:
        data = f.read()
    assert data[:8] == b"\x89PNG\r\n\x1a\n"
    i = 8
    idat = b""
    w = h = ch = 0
    while i < len(data):
        ln = struct.unpack(">I", data[i : i + 4])[0]
        typ = data[i + 4 : i + 8]
        if typ == b"IHDR":
            w, h, bitd, ct, comp, filt, inter = struct.unpack(">IIBBBBB", data[i + 8 : i + 21])
            ch = {0: 1, 2: 3, 3: 1, 4: 2, 6: 4}[ct]
        elif typ == b"IDAT":
            idat += data[i + 8 : i + 8 + ln]
        i += 12 + ln
    raw = zlib.decompress(idat)
    stride = w * ch
    rows = []
    prev = bytearray(stride)
    p = 0
    for y in range(h):
        ft = raw[p]
        p += 1
        line = bytearray(raw[p : p + stride])
        p += stride
        if ft == 1:
            for x in range(ch, stride):
                line[x] = (line[x] + line[x - ch]) & 255
        elif ft == 2:
            for x in range(stride):
                line[x] = (line[x] + prev[x]) & 255
        elif ft == 3:
            for x in range(stride):
                a = line[x - ch] if x >= ch else 0
                line[x] = (line[x] + ((a + prev[x]) >> 1)) & 255
        elif ft == 4:
            for x in range(stride):
                a = line[x - ch] if x >= ch else 0
                b = prev[x]
                c = prev[x - ch] if x >= ch else 0
                pa = abs(b - c)
                pb = abs(a - c)
                pc = abs(a + b - 2 * c)
                pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
                line[x] = (line[x] + pr) & 255
        rows.append(bytes(line))
        prev = line
    return w, h, ch, rows

w, h, ch, rows = load_png(sys.argv[1])
print(f"size {w}x{h}")

def analyze(y0, y1, label):
    teal = gold = bright = warm = 0
    total = 0
    dark = 0
    for y in range(y0, min(y1, h), 4):
        for x in range(0, w, 4):
            r = rows[y][x * ch]
            g = rows[y][x * ch + 1]
            b = rows[y][x * ch + 2]
            total += 1
            lum = 0.299 * r + 0.587 * g + 0.114 * b
            if lum > 130:
                bright += 1
            if lum < 40:
                dark += 1
            if g > 150 and r < 110 and b > 120 and g > b - 30:  # teal
                teal += 1
            if r > 190 and g > 130 and b < 130:  # warm gold/orange (city lights)
                warm += 1
    print(f"{label}: dark {dark/total:.0%} bright {bright/total:.0%} teal {teal} warm {warm}")

analyze(0, int(h * 0.45), "top 45% (hero/video area)")
analyze(int(h * 0.45), h, "bottom 55%")
