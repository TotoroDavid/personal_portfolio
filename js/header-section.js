document.addEventListener("DOMContentLoaded", () => {
    // 🎯 Cyberpunk Colors
    const cyberpunkColors = [
        "#ff007c", "#00f0ff", "#ff6ec7",
        "#8a2be2", "#39ff14", "#fb00ff"
    ];

    // ✂️ Split el título en letras
    const split = new SplitType("#heading-header", {
        types: "chars"
    });

    // 🔥 Animación de entrada para todas las letras
    split.chars.forEach((char, index) => {
        const originalColor = window.getComputedStyle(char).color;
        char.dataset.originalColor = originalColor;

        gsap.from(char, {
            filter: "blur(8px)",
            opacity: 0,
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-150, 150),
            rotationY: gsap.utils.random(-180, 180),
            scale: gsap.utils.random(0.4, 1.6),
            duration: gsap.utils.random(0.7, 1.1),
            ease: "elastic.out(1, 0.4)",
            delay: index * 0.03
        });

        // cambio de color momentáneo tipo glitch
        gsap.fromTo(char,
            { color: gsap.utils.random(cyberpunkColors) },
            {
                color: originalColor,
                duration: 0.3,
                ease: "power1.out",
                delay: index * 0.03 + 0.5
            }
        );
    });


    // 🧠 Solo hover interactivo para los caracteres dentro de ".custom-style-dark"
    document.querySelectorAll(".custom-style-dark .char").forEach((char) => {
        const originalColor = char.dataset.originalColor;

        char.addEventListener("mouseenter", function charHover() {
            const tl = gsap.timeline();

            tl.to(char, {
                y: gsap.utils.random(-40, 40),
                x: gsap.utils.random(-40, 40),
                rotate: gsap.utils.random(-90, 90),
                rotationY: gsap.utils.random(-90, 90),
                scale: gsap.utils.random(0.6, 1.4),
                color: gsap.utils.random(cyberpunkColors),
                duration: 0.4,
                ease: "back.out",
                onStart: () => {
                    char.removeEventListener("mouseenter", charHover);
                }
            });

            tl.to(char, {
                y: 0,
                x: 0,
                rotate: 0,
                rotationY: 0,
                scale: 1,
                color: originalColor,
                duration: 0.1, // ⚡️ más rápido para que no se quede "pegado"
                delay: 0,
                ease: "power2.out",
                onComplete: () => {
                    setTimeout(() => {
                        char.addEventListener("mouseenter", charHover);
                    }, 300);
                }
            });
        });
    });

    // 🌀 Animación previa de la izquierda + parte derecha
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(".avatar_circle", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
    })
        .from(".avatar_image", { scale: 0.7, opacity: 0 }, "-=1")
        .from(".hero_avatar_name", { y: 30, opacity: 0 }, "-=0.8")
        .from(".hero_avatar_title", { y: 30, opacity: 0 }, "-=0.7")
        .from(".social_icon", { y: 20, opacity: 0, stagger: 0.1 }, "-=0.6")
        .from(".hero_available", { y: -10, opacity: 0, scale: 0.8, duration: 0.8 }, "-=0.5")
        .from(".hero_main_right p", { y: 30, opacity: 0 }, "-=0.4");
});
