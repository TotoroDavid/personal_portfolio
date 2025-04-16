# Technical Context: Implementation Details

## Tech Stack

- Webflow Export
- GSAP Core
- GSAP ScrollTrigger
- match-container.js (FlowTricks)
- Local Development Server

## File Structure

```
/
├── index.html
├── css/
│   └── styleguide.css
├── js/
│   └── animations.js
└── memory-bank/
    └── [memory bank files]
```

## GSAP Setup

```html
<!-- Required GSAP Scripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/flowtricks/script@v1.0.4/match-container.js"></script>
```

## Development Environment

- Local Server: Live Server (VS Code)
- Browser: Chrome (DevTools)
- Testing: Responsive Design Mode
- Performance: Chrome Lighthouse

## Webflow-Specific Considerations

- Class naming conventions
- Export structure
- Custom code injection
- Asset management
- Responsive breakpoints

## Animation Implementation

- Use GSAP context for cleanup
- Implement proper ScrollTrigger refresh
- Handle image loading
- Manage font loading
- Consider layout shifts
