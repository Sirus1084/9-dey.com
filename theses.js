/* ============================================================
   9-dey — thesis version registry
   ------------------------------------------------------------
   Newest thesis FIRST. The first entry is always the "current"
   one and always lives at index.html.

   TO ADD A NEW THESIS (see README for the full routine):
   1. Copy the current index.html to a dated archive file,
      e.g. thesis-2026-09-01.html, and set its <body data-thesis>
      to that same filename.
   2. In the list below, change the OLD current entry's `file`
      from "index.html" to its archive filename.
   3. Write the new thesis into index.html (new date in the
      masthead + <body data-thesis="index.html">).
   4. Add a new entry at the TOP of the list pointing to
      "index.html" with the new date label.
   ============================================================ */

const THESES = [
  { label: "24 June 2026", file: "index.html" },
  // { label: "1 September 2026", file: "thesis-2026-09-01.html" },
];

function initThesisDropdown(){
  const dd = document.getElementById("thesisDd");
  if(!dd) return;
  const menu = document.getElementById("thesisDdMenu");
  const summary = dd.querySelector("summary");

  // which thesis (if any) is the current page?
  const currentFile = document.body.dataset.thesis || null;
  const summaryEntry = THESES.find(t => t.file === currentFile) || THESES[0];

  summary.innerHTML = 'Thesis · ' + summaryEntry.label + ' <span class="caret">▾</span>';

  menu.innerHTML = THESES.map((t, i) => {
    const isCur = t.file === currentFile;
    const tag = (i === 0) ? '<span class="dd-tag">current</span>' : '';
    return '<a href="' + t.file + '"' + (isCur ? ' class="is-current"' : '') + '>'
         + '<span>' + t.label + '</span>' + tag + '</a>';
  }).join("");

  // close when clicking outside
  document.addEventListener("click", (e) => {
    if(dd.open && !dd.contains(e.target)) dd.removeAttribute("open");
  });
}
document.addEventListener("DOMContentLoaded", initThesisDropdown);
