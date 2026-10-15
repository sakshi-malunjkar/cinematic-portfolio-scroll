<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Studio architecture
- Keep shared navigation and footer in the root layout; content pages own unique metadata so all public sections remain independently addressable.
- Keep concept portfolio records in a browser-safe shared module; identify sample work rather than implying completed commissions.
- Load GSAP and ScrollTrigger after hydration with scoped cleanup and reduced-motion/mobile branches to preserve SSR and ordinary scrolling.
- Use the shared scene sequence for immersive project and service chapters; native sticky staging with scoped GSAP transitions falls back to readable stacked scenes without motion or JavaScript.
- Keep process stacking and content reveals inside the shared motion hook; enhancement classes are removed on cleanup so reduced-motion and unanimated content remain accessible.
- Enquiries use a schema-validated public server function with insert-only privileged access to a private RLS table; never expose visitor read access or return submitted personal data.
- Keep all visual colors and image overlays in semantic global design tokens so presentation remains consistent.
