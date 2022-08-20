const btn = document.querySelector(".btn-darkmode");
const img = document.querySelector(".background");
const main = document.querySelector(".main");
const circle = document.querySelector(".circle")
const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")

console.log(btn, moon, sun);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!btn.classList.contains("active")) {
    moon.style.display = "inline-block";
    sun.style.backgroundColor = "#807ACD";
    circle.style.left = "90px";
    circle.style.backgroundColor = "#FEFEFF";
    btn.style.backgroundColor = "#4D45C0";
    main.style.backgroundColor = "RGBA(38,49,75,0.95)"
    main.style.color = "#FEFEFF"
    img.src = "./assets/skynight.png"

    btn.classList.add("active");

  } else {
    moon.style.display = "none";
    sun.style.backgroundColor = "#f8dc6e";
    circle.style.backgroundColor = "#d9b45d";
    circle.style.left = "0";
    btn.style.backgroundColor = "#71bcbd";
    main.style.backgroundColor = "RGBA(189,219,178,0.95)"
    main.style.color = "#253d3d"
    img.src = "./assets/skyday.png"

    btn.classList.remove("active");

  }
})