# Book 4 Private Interactive Architecture Gate — 2026-09-15

**Status:** IMPLEMENTED / PRIVATE PREPUBLICATION SURFACE  
**Human authorization:** Darren Dang  
**Access instruction:** Google login `dangphibang@gmail.com` only

## Decision

Darren authorized an interactive Book 4 architecture experience on DarrenDang.com that remains private until Book 4 is explicitly authorized for publication.

The public website repository must **not** contain the unpublished architecture payload before that publication decision.

## Security model

The implemented boundary is:

`PUBLIC STATIC SHELL → GOOGLE AUTHENTICATION → SERVER-SIDE ROLE AUTHORIZATION → PRIVATE PAYLOAD`

The public repository contains only:

- the static route shell;
- renderer/interactivity code;
- presentation styles;
- the public Supabase project URL and publishable key already used by the website.

It does **not** contain the unpublished architecture graph or node descriptions.

The protected payload is returned by a Supabase Edge Function only after a valid Google-authenticated session passes a server-side membership check for role:

`book4-architecture`

Current authorized membership is restricted to:

`dangphibang@gmail.com`

Authentication by another Google account does not authorize access.

## Private source authority

The architecture source is maintained in the private Book 4 repository:

`darrendang/book4-the-making-of-the-way/web/private-architecture/architecture.v1.json`

The private source currently derives from the v5.0 manuscript-admitted architecture snapshots plus the September 15 post-admission layering/co-adaptation canon delta.

The public website must not redefine that private Book 4 canon.

## Public surface

Private direct route:

`/books/the-making-of-the-way/architecture/`

The route is intentionally:

- absent from public navigation;
- absent from the public Book 4 page;
- marked `noindex`, `nofollow`, `noarchive`, and `nosnippet`;
- incapable of displaying the architecture until authorization succeeds.

## Publication gate

Book 4 publication is currently **NOT AUTHORIZED**.

When Darren later authorizes publication, run a separate public-release review. Do not simply remove authentication from the prepublication payload. Create a reviewed public derivative and decide explicitly:

- which stages and details become public;
- where the interactive experience appears in navigation and the Book 4 page;
- whether any private/internal terminology should remain excluded;
- how source/provenance information is presented;
- accessibility and responsive QA;
- DANG Signature Style Guide consistency.

The publication decision must be a new human-approved state.
