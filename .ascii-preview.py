import zlib, struct, sys

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

def ascii_map(path, cols=72, rows=24):
    w, h, ch, data = load_png(path)
    chars = " .:-=+*#%@"
    out = []
    for ry in range(rows):
        y = min(h - 1, int(ry * h / rows))
        line = ""
        for rx in range(cols):
            x = min(w - 1, int(rx * w / cols))
            r = data[y][x * ch]
            g = data[y][x * ch + 1]
            b = data[y][x * ch + 2]
            lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
            line += chars[min(9, int(lum * 10))]
        out.append(line)
    print("\n".join(out))
    # also report teal-ish and gold-ish pixel counts (site accents)
    teal = gold = 0
    for y in range(0, h, 4):
        for x in range(0, w, 4):
            r = data[y][x * ch]
            g = data[y][x * ch + 1]
            b = data[y][x * ch + 2]
            if g > 140 and g > r + 60 and g > b + 60:
                teal += 1
            if r > 180 and g > 120 and b < 120 and r > b + 90:
                gold += 1
    print(f"teal px: {teal}, gold px: {gold}")

ascii_map(sys.argv[1])
