# Cinematic Interior Design Studio Website

## Direction
Build an architectural-editorial website: immersive interior photography, oversized refined typography, a monochrome foundation with subtle material-inspired accents, and generous unframed layouts. The experience should feel like a visual film unfolding through scrolling, without sacrificing easy navigation.

Use **FORME Studio** as a temporary studio name. Generate a cohesive sample portfolio and label projects as concept work; do not invent real clients, awards, testimonials, addresses, or contact details.

## The scrolling story
1. **Opening scene:** a full-width, sharply detailed interior image with the studio name prominently overlaid, quiet navigation, and a visible glimpse of the following chapter.
2. **Studio philosophy:** a short editorial introduction revealed alongside architectural details as the user scrolls.
3. **Selected work:** three distinct sample interiors, presented through large images, layered transitions, project titles, and links to detailed project views.
4. **Services:** residential interiors, commercial spaces, and styling, with concise descriptions and corresponding photography.
5. **Process:** discovery, concept, design development, and realization, introduced through a measured visual sequence.
6. **Closing scene:** an inviting project enquiry section, followed by a minimal footer.

Use a few short pinned image sequences, subtle parallax, image-mask reveals, and staggered typography. Keep normal scrolling intact: no forced scroll speed, scroll locking, or lengthy introductory loading screen.

## Pages and interactions
- **Home:** the complete cinematic scrolling story.
- **Work:** the sample portfolio with project-type filtering.
- **Project details:** image-led galleries, project overview, scope, and next-project navigation.
- **Studio:** philosophy, approach, and process; no fabricated team biographies.
- **Services:** service descriptions and links to start an enquiry.
- **Contact:** name, email, project type, and message, with required-field validation and clear submission states.
- Shared navigation with an accessible mobile menu, clear active-page states, and a consistent enquiry link.

## Contact handling
Enable Lovable Cloud during implementation to securely save genuine enquiries. Include server-side validation and basic spam protection, and only show success after the enquiry is saved. Email notifications are not included until a real recipient and sending setup are supplied. If Cloud activation is declined, clearly mark the form as unavailable rather than simulating a successful submission.

## Mobile and accessibility
- Replace desktop pinned scenes with shorter, naturally flowing image reveals on phones.
- Keep photography legible, text readable, and controls comfortable to tap; avoid clipped headings and horizontal overflow.
- Respect reduced-motion settings, support keyboard navigation, provide visible focus states, and use meaningful image descriptions.
- Load opening photography first and defer later images so the cinematic treatment stays practical on mobile connections.

## Technical approach
- Retain the existing TanStack routing and Tailwind design system; replace the placeholder home page at `/`.
- Create shared navigation, footer, portfolio data, and reusable animation primitives. Use GSAP ScrollTrigger for coordinated cinematic sequences, with cleanup on page changes.
- Generate up to four coordinated interior images for the opening scene and three concept projects; store them as project assets.
- Define all palette, typography, and surface treatments through semantic design tokens, using existing design-system controls.
- Give every content page its own studio-specific title, description, and social metadata.
- Follow Lovable Cloud runtime, validation, and access rules for enquiry storage; no public enquiry-reading access.

## Verification
Check desktop and phone layouts, navigation, filtering, project galleries, reduced-motion behavior, and the full enquiry submission flow. Confirm saved enquiries read back correctly through an authorized check, and resolve any rendering or build errors before delivery.

## Inputs still needed before launch
Replace the temporary studio name and sample projects with your identity and real work. Add your actual location, contact information, and any genuine social links when available. These are not blockers for building the first version.