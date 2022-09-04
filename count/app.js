const count = document.querySelector("#count_num");
const controls = document.querySelectorAll("#controls");


controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    e.preventDefault();
    resultCount(e.target.innerText);
  })
})

function resultCount(control) {
  const number = control === "+" ? +count.innerText + 1 : +count.innerText - 1;

  if (number < 10) {
    control === "+" ? count.innerHTML = `000${+count.innerText + 1}` : count.innerHTML = `000${+count.innerText > 0 ? +count.innerText - 1 : +count.innerText}`;
  } else if (number >= 10 && number < 100) {
    control === "+" ? count.innerHTML = `00${+count.innerText + 1}` : count.innerHTML = `00${+count.innerText > 0 ? +count.innerText - 1 : +count.innerText}`;
  } else if (number >= 100 && number < 1000) {
    control === "+" ? count.innerHTML = `0${+count.innerText + 1}` : count.innerHTML = `0${+count.innerText > 0 ? +count.innerText - 1 : +count.innerText}`;
  } else if (number >= 1000 && number < 10000) {
    control === "+" ? count.innerHTML = +count.innerText + 1 : count.innerHTML = +count.innerText > 0 ? +count.innerText - 1 : +count.innerText;
  } else {
    alert("O valor máximo de contagem é 9999");
  }
}