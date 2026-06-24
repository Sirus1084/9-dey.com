# Health Tech Founder Thesis — site

A two-page static site. No framework, no build step.

- `index.html` — the thesis (the bedrock)
- `map.html` — the path map (flowchart, principles, kill signals)
- `style.css` — shared house style (Georgia, hairline rules, no fills). Colours live in `:root` at the top.

## Editing

Everything is plain HTML. To change wording, edit the text inside the relevant
`<section>`. The flowchart is inline SVG in `map.html` — each box's label is a
`<text>` element you can edit directly; no graphics tool needed. If you move or
resize a box, the box is the `<rect>`/`<polygon>` just above its `<text>`.

Open either file in a browser to preview locally (double-click, or `open index.html`).

## Deploy to Cloudflare Pages

### Option A — dashboard (no terminal)
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Drag this whole folder in. Set the project name. Deploy.
3. You get a `*.pages.dev` URL immediately.

### Option B — Wrangler / Claude Code (recommended for ongoing edits)
```bash
npm install -g wrangler          # once
wrangler login                   # once, opens browser
wrangler pages deploy . --project-name=health-tech-thesis
```
Re-run the last line any time to push updates. This is the flow to drive from
Claude Code: make the edit, then deploy.

(Optional, for git-based auto-deploy: push this folder to a GitHub repo, then in
Pages → **Connect to Git** → select the repo. Build command: none. Output dir: `/`.)

## Custom domain (after you buy it)
Pages project → **Custom domains** → **Set up a domain** → enter the domain →
follow the DNS prompts. If the domain is registered at Cloudflare, it's automatic;
if elsewhere, add the CNAME they give you.
