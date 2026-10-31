function initCatalogue() {
  const root = document.querySelector<HTMLElement>("[data-catalogue]");
  if (!root) return;

  const select = root.querySelector<HTMLSelectElement>("[data-catalogue-sort]");
  const grid = root.querySelector<HTMLElement>(".catalogue_grid");
  if (!select || !grid) return;

  const cards = Array.from(grid.children);

  const apply = () => {
    const sorted = [...cards].sort((a, b) => {
      if (select.value === "title") {
        return (a.getAttribute("data-title") ?? "").localeCompare(
          b.getAttribute("data-title") ?? "",
          "en",
        );
      }
      return (
        Number(a.getAttribute("data-order")) -
        Number(b.getAttribute("data-order"))
      );
    });
    sorted.forEach((card) => grid.append(card));
  };

  select.addEventListener("change", apply);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCatalogue);
} else {
  initCatalogue();
}
