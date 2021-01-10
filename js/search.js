const search = document.getElementById("search");
const iconSearch = document.querySelector(".search");

iconSearch.addEventListener("mouseover", () => {
  search.classList.add("show");
});

iconSearch.addEventListener("mouseout", () => {
  search.classList.remove("show");
});
