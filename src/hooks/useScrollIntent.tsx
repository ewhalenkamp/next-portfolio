import { useEffect } from "react";

export default function useScrollIntent(setIntent: Function) {
    useEffect(() => {
        // ---- Wheel ----
        const onWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) < 5) return;
            setIntent(e.deltaY > 0 ? "down" : "up");
        };

        // ---- Touch ----
        let startY = 0;

        const onTouchStart = (e: TouchEvent) => {
            startY = e.touches[0].clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            const diff = startY - e.touches[0].clientY;
            if (Math.abs(diff) < 5) return;
            setIntent(diff > 0 ? "down" : "up");
        };

        // ---- Keyboard ----
        const onKeyDown = (e: KeyboardEvent) => {
            if (["ArrowDown", "PageDown", " "].includes(e.key)) {
                setIntent("down");
            } else if (["ArrowUp", "PageUp"].includes(e.key)) {
                setIntent("up");
            }
        };

        window.addEventListener("wheel", onWheel, { passive: true });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: true });
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, []);
}