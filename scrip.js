let colors = [document.querySelector(".color1"), document.querySelector(".color2"),document.querySelector(".color3"),document.querySelector(".color4"),document.querySelector(".color5"),];
colors.forEach(function (color) {
  color.addEventListener("click", function (ev) {
   let style = getComputedStyle(color)
    document.documentElement.style.setProperty("--main-color", style.backgroundColor)
  })
})