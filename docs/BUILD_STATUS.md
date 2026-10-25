# Build and deployment status — October 25, 2026

**Stage:** DEPLOYED / LIVE VERIFIED.

DarrenDang.com runs on GitHub Pages through the existing GitHub Actions static-export workflow. Pushes and pull requests run validation; pushes to main also trigger production deployment. The old manual-only/pre-launch statements below are historical. No DNS or infrastructure change is required.

The nine-language Book 1 catalog in PR #48 deployed as `cc6206a2d512e528bb8e0c199018790c83308d69`; validation run `40205737623` and Pages run `40205737384` succeeded. All nine live language selections and the Book 1 embedded chooser were verified October 25. A follow-up removes the stale English/Vietnamese-only sentence above the chooser. Current routing: [public-state checkpoint](CURRENT_PUBLIC_STATE_2026-10-25.md). Subsequent deployment status must be checked against its exact workflow run and live page.

Historical October 18 checkpoint: PR #46 deployed as `ca87da379c86bf9cc0ae915875c83d8a7ccd7eb7`; validation run `39169434995` and Pages run `39169434913` succeeded. Those purchase observations retain their as-of scope.

## Preserved historical foundation record

The following pre-launch record is superseded as a current operational description; its original text is retained for provenance.

---

# DarrenDang.com Build Status

**Stage:** Pre-launch public GitHub repository foundation  
**Hosting target:** GitHub Pages  
**Canonical domain:** `darrendang.com`

## Ready in this repository
- Next.js App Router + TypeScript static-export structure
- GitHub Pages deployment workflow
- CI validation workflow
- public-repository privacy/secret audit
- approved homepage component structure and visual system
- launch routes for Ideas, Books, Speaking, About, Connect, Privacy, and Accessibility
- initial public-safe structured content seed
- Sanity schemas for future structured publishing
- sitemap, robots, and Person/WebSite metadata foundation
- approved book cover and Darren headshot

## Pre-launch controls
- Pages deployment is manual-only until launch approval.
- Contact delivery is disabled until an approved endpoint is configured.
- Sanity integration is optional during the seed-content phase.
- DNS must not be changed until the GitHub custom domain is configured and verified.

## Next gate
Create the public repository `darrendang/darrendang-com` with a starter README, populate it from this sanitized tree, let CI resolve dependencies/build, then review the resulting CI logs before enabling Pages.
