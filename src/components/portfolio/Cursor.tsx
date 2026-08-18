import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let x = -100;
    let y = -100;
    let targetX = x;
    let targetY = y;
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
      cursor.classList.toggle(
        "is-interactive",
        Boolean(target?.closest(INTERACTIVE_SELECTOR)),
      );
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch") {
        cursor.classList.add("is-pressed");
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerType !== "touch") {
        cursor.classList.remove("is-pressed");
      }
    };

    const onPointerLeave = () => {
      visible = false;
    };

    const animate = () => {
      if (reducedMotion) {
        x = targetX;
        y = targetY;
      } else {
        x += (targetX - x) * 0.22;
        y += (targetY - y) * 0.22;
      }

      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
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
    <div ref={cursorRef} aria-hidden="true" className="custom-cursor">
      <span className="custom-cursor-dot" />
      <span className="custom-cursor-halo" />
    </div>
  );
}
