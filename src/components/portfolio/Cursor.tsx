import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Keep the native cursor on touch devices and for reduced-motion users.
    if (!finePointer || reducedMotion) return;

    document.body.classList.add("cursor-none");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let scale = 1;
    let opacity = 1;
    let hovered = false;
    let pressed = false;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      hovered = Boolean(target?.closest?.(INTERACTIVE_SELECTOR));
    };

    const onDown = () => {
      pressed = true;
    };

    const onUp = () => {
      pressed = false;
    };

    const loop = () => {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;

      const targetScale = pressed ? 0.55 : hovered ? 2.5 : 1;
      const targetOpacity = hovered ? 0.5 : 1;
      scale += (targetScale - scale) * 0.2;
      opacity += (targetOpacity - opacity) * 0.2;

      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
      dot.style.opacity = String(opacity);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      style={{ transform: "translate3d(-9999px, -9999px, 0)" }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] size-3 rounded-full bg-blue shadow-[0_0_0_4px_rgba(37,99,235,0.16),0_0_18px_rgba(37,99,235,0.45)]"
    />
  );
}
