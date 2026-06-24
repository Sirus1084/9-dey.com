# 9-dey — Health Tech Founder Thesis (site)

A small static site. No framework, no build step. Auto-deploys from this
GitHub repo to Cloudflare on every push to `main`.

## Files
- `index.html` — the **current** thesis (always lives here, dated in the masthead)
- `thesis-YYYY-MM-DD.html` — frozen **archive** copies of past theses (created as you go)
- `map.html` — the path map (universal, **not** versioned, no date)
- `theses.js` — the version registry + dropdown (newest first)
- `style.css` — shared house style (Georgia, hairline rules, monochrome). Colours in `:root`.

## Editing
Plain HTML. Edit the text inside the relevant `<section>`. The map's flowchart is
inline SVG in `map.html` — each box label is a `<text>` element. The thesis diagrams
are inline SVG in `index.html` (search for `DIAGRAM A/B/C`).

Open any file in a browser to preview locally.

## Adding a new thesis (the dropdown)
The current thesis always lives at `index.html`. Older ones are frozen as dated files
and listed in the Thesis dropdown. To add a new version (e.g. 1 Sep 2026):

1. **Archive the current one.** Copy `index.html` to `thesis-2026-06-24.html`
   (use the date currently in index.html's masthead). In that new archive file,
   set `<body data-thesis="thesis-2026-06-24.html">`.
2. **Repoint the old entry** in `theses.js`: change its `file` from `"index.html"`
   to `"thesis-2026-06-24.html"`.
3. **Write the new thesis** into `index.html` — update the masthead date
   (`<title>`, `.version`) and keep `<body data-thesis="index.html">`.
4. **Add the new entry at the TOP** of the `THESES` list in `theses.js`:
   `{ label: "1 September 2026", file: "index.html" },`
5. `git push` — the live site updates automatically.

Claude Code can do all five steps from one instruction, e.g.:
*"Archive the current thesis and start a new one dated today — same content, but
update section 04 to reflect what I've learned in consulting."*

## Deploy
Already wired: push to `main` → Cloudflare rebuilds → `9-dey.com` updates in a
minute or two. Hard-refresh (Cmd+Shift+R) if you don't see a change immediately.
Build status is under the Cloudflare project's **Deployments** tab.

## Notes
- The site is public; the code repo is private. That split is intentional.
- The `section:has()` CSS needs a modern browser (fine for current Safari/Chrome/Firefox).
