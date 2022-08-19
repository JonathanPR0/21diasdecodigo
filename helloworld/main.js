const title = document.querySelector('.title');
const text = title.innerHTML.split("")
title.innerHTML = "";

text.forEach((word, i) => {
  setTimeout(() => {
    title.innerHTML += word
  }, 75 * i)
})