# System Patterns: Animation Standards

## Naming Conventions

- `.fade-in`: Basic fade animation
- `.fade-up`: Fade + translateY up
- `.fade-down`: Fade + translateY down
- `.fade-left`: Fade + translateX left
- `.fade-right`: Fade + translateX right
- `.scale-in`: Scale from 0 to 1
- `.reveal`: Clip-path reveal
- `.parallax`: Scroll-based parallax

## Reusable GSAP Timelines

```javascript
// Basic fade up timeline
const fadeUp = gsap
  .timeline({
    defaults: {
      duration: 0.8,
      ease: "power2.out",
    },
  })
  .from(element, {
    y: 50,
    opacity: 0,
  });

// Staggered reveal timeline
const staggerReveal = gsap
  .timeline({
    defaults: {
      duration: 0.6,
      ease: "power2.out",
    },
  })
  .from(elements, {
    y: 30,
    opacity: 0,
    stagger: 0.1,
  });
```

## ScrollTrigger Configurations

```javascript
// Basic scroll trigger
ScrollTrigger.create({
  trigger: element,
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
});

// Parallax scroll trigger
ScrollTrigger.create({
  trigger: element,
  start: "top bottom",
  end: "bottom top",
  scrub: true,
});
```

## Animation Principles

1. Progressive Enhancement
2. Performance First
3. Mobile Responsive
4. Accessible Design
5. Consistent Timing

## Common Patterns

- Hero section entrance
- Section reveals
- Card hover effects
- Text reveals
- Image parallax
- Navigation transitions
