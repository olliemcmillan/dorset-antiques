/** Fade title blocks in on load, and again after a page transition. */

function revealTitles() {
  document.querySelectorAll<HTMLElement>("[data-title-reveal]").forEach((block) => {
    block.classList.remove("is-in");
    void block.offsetWidth;
    block.classList.add("is-in");
  });
}

// The first astro:page-load is the window load event. Titles have already
// started, so ignore that one and replay only after a navigation.
let ignoreInitialLoad = document.readyState !== "complete";

revealTitles();
document.addEventListener("astro:page-load", () => {
  if (ignoreInitialLoad) {
    ignoreInitialLoad = false;
    return;
  }
  revealTitles();
});
