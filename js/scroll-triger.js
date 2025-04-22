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
            return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
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

    ScrollTrigger.refresh();
}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".header_item", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: {
        each: 0.15,
        from: "start"
    },
    scrollTrigger: {
        trigger: ".header_list-wrapper",
        start: "top 85%",
        toggleActions: "play none none reverse",
        scrub: 1,
        markers: true // true si quieres debuggear
    }
});
