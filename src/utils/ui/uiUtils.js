export function handleUnCheckFavorites(value, selector1, selector2) {
  document.querySelectorAll(".favorites__field").forEach((element) => {
    if (element.id !== value || value === "all") {
      element.checked = "";
    }
  });

  document.querySelector(selector1).checked = "";
  document.querySelector(selector2).checked = "checked";
};