document.addEventListener("DOMContentLoaded", () => {
    const ring = document.createElement("div");
    const ringRed = document.createElement("div");
    const ringCyan = document.createElement("div");
    const dot = document.createElement("div");

    ring.classList.add("cursor_ring");
    ringRed.classList.add("cursor_ring_red");
    ringCyan.classList.add("cursor_ring_cyan");
    dot.classList.add("cursor_dot");

    document.body.append(ring, ringRed, ringCyan, dot);
    document.body.style.cursor = "none";

    const sharedStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "2px solid black",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
    };

    Object.assign(ring.style, {
        ...sharedStyles,
        borderColor: "#000",
        transition: "border-color 0.3s ease",
    });

    Object.assign(ringRed.style, {
        ...sharedStyles,
        borderColor: "red",
        opacity: 0.35,
        zIndex: 9998,
    });

    Object.assign(ringCyan.style, {
        ...sharedStyles,
        borderColor: "cyan",
        opacity: 0.35,
        zIndex: 9998,
    });

    Object.assign(dot.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "8px",
        height: "8px",
        background: "coral",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
    });

    document.addEventListener("mousemove", (e) => {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const bgColor = getComputedBackgroundColor(el);
        const isDark = isDarkBg(bgColor);

        ring.style.borderColor = isDark ? "#fff" : "#000";

        const offset = 3;

        gsap.to(ring, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.55,
            ease: "sine.out",
        });

        gsap.to(ringRed, {
            x: e.clientX + offset,
            y: e.clientY,
            duration: 0.3,
            ease: "sine.out",
        });

        gsap.to(ringCyan, {
            x: e.clientX - offset,
            y: e.clientY,
            duration: 0.3,
            ease: "sine.out",
        });

        gsap.to(dot, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.15,
            ease: "power1.out",
        });
    });

    const hoverTargets = document.querySelectorAll("a, button, .btn_main_wrap");
    hoverTargets.forEach(el => {
        el.addEventListener("mouseenter", () => {
            gsap.to([ring, ringRed, ringCyan], {
                scale: 1.7,
                duration: 0.35,
                ease: "power3.out",
            });
        });
        el.addEventListener("mouseleave", () => {
            gsap.to([ring, ringRed, ringCyan], {
                scale: 1,
                duration: 0.3,
                ease: "power3.out",
            });
        });
    });

    document.addEventListener("mousedown", () => {
        gsap.to([ring, ringRed, ringCyan], {
            scale: 0.85,
            duration: 0.15,
            ease: "power2.inOut",
        });
    });

    document.addEventListener("mouseup", () => {
        gsap.to([ring, ringRed, ringCyan], {
            scale: 1,
            duration: 0.3,
            ease: "elastic.out(1, 0.35)",
        });
    });

    function getComputedBackgroundColor(el) {
        while (el && el !== document.body) {
            const bg = getComputedStyle(el).backgroundColor;
            if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
                return bg;
            }
            el = el.parentElement;
        }
        return getComputedStyle(document.body).backgroundColor || "#fff";
    }

    function isDarkBg(rgb) {
        const result = rgb.match(/\d+/g);
        if (!result) return false;
        const [r, g, b] = result.map(Number);
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luminance < 128;
    }
});
