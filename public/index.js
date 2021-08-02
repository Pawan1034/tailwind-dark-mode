const menu = document.getElementById("menu").classList;
document.querySelector("#burger").addEventListener("click", () => {
  return menu.toggle("hidden");
});

const dark = document.querySelector("#dark");
dark.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  document.documentElement.classList.contains("dark")
    ? localStorage.setItem("mode", "dark")
    : localStorage.setItem("mode", "light");
});

//check for mode on page load and apply it.
if (localStorage.getItem("mode") === "dark") {
  document.documentElement.classList.add("dark");
}

document.body.onkeydown = (eve) => {
  if (eve.code === "KeyD") {
    document.documentElement.classList.toggle("dark");
  }
};
