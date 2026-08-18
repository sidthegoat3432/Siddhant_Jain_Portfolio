import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = -100;
    let y = -100;
    let targetX = x;
    let targetY = y;
    let scale = 1;
    let targetScale = 1;
    let visible = false;
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      // Touch pointers should never trigger a desktop cursor treatment.
      if (event.pointerType === "touch") return;
      document.documentElement.classList.add("custom-cursor-active");
      targetX = event.clientX;
      targetY = event.clientY;
      visible = true;

      const target = event.target as HTMLElement | null;
      targetScale = target?.closest(INTERACTIVE_SELECTOR) ? 2.8 : 1;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch") targetScale = 0.62;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerType !== "touch") targetScale = 2.8;
    };

    const onPointerLeave = () => {
      visible = false;
    };

    const animate = () => {
      x += (targetX - x) * 0.24;
      y += (targetY - y) * 0.24;
      scale += (targetScale - scale) * 0.22;

      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
      cursor.style.opacity = visible ? "1" : "0";
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="custom-cursor-dot"
    />
  );
}
