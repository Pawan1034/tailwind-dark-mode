const menu = document.getElementById("menu").classList;
document.querySelector("#burger").addEventListener("click", () => {
  return menu.toggle("hidden");
});

const dark = document.querySelector("#dark");
dark.addEventListener("click", () => {
  document.documentElement.classList.contains("dark")
    ? localStorage.setItem("mode", "light")
    : localStorage.setItem("mode", "dark");
  if (localStorage.getItem("mode") === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

//check for mode on page load and apply it.
if (localStorage.getItem("mode") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

//darkmode shortcut

document.body.onkeydown = (eve) => {
  if (eve.code === "KeyD") {
    document.documentElement.classList.toggle("dark");
  }
};
