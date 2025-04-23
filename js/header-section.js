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
        ScrollTrigger.update();
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

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-landing",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false
    }
});

// Movimiento en orden
tl.to(".video-wrapper-2", { y: "50vh", x: "-5vw" }, 0);
tl.to(".video-wrapper-1", { y: "100vh", x: "5vw" }, 0.2);
tl.to(".main-video", { y: "200vh" }, 0.4);

tl.to(".main-video .video", {
    width: "100vw",
    height: "100vh",

    y: "-50vh"
}, 0.6);

// Botón aparece al final
tl.to(".button-video", { autoAlpha: 1, duration: 0.5 }, 0.8);
