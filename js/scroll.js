if (Webflow.env("editor") === undefined) {
    const lenis = new Lenis({
        lerp: 0.05,
        wheelMultiplier: 0.7,
        gestureOrientation: "vertical",
        normalizeWheel: false,
        smoothTouch: false
    });

    function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update(); // Mantiene ScrollTrigger sincronizado
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
            return arguments.length ? lenis.scrollTo(value) : lenis.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.body.style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.refresh(); // Refresca después de configurar el proxy
}