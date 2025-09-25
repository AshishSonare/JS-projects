const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const para = document.querySelector("p");
const head = document.querySelector("h1");
const container = document.querySelector("#container");

let count = 0;

const btn1Color = () => {
  container.style.backgroundColor = "#32936F";

  //   container.style.backgroundColor = "#000";
  para.style.color = "#000";
  head.style.color = "#000";
  btn5.style.backgroundColor = "#000";
};
const btn2Color = () => {
  container.style.backgroundColor = "#FFBF00";

  //   container.style.backgroundColor = "#000";
  para.style.color = "#000";
  head.style.color = "#000";
  btn5.style.backgroundColor = "#000";
};
const btn3Color = () => {
  container.style.backgroundColor = "#E83F6F";

  //   container.style.backgroundColor = "#000";
  para.style.color = "#000";
  head.style.color = "#000";
  btn5.style.backgroundColor = "#000";
};
const btn4Color = () => {
  container.style.backgroundColor = "#2274A5";

  //   container.style.backgroundColor = "#000";
  para.style.color = "#000";
  head.style.color = "#000";
  btn5.style.backgroundColor = "#000";
};

const btn5Color = () => {
  if (count % 2 == 0) {
    container.style.backgroundColor = "#000";
    para.style.color = "#fff";
    head.style.color = "#fff";
    btn5.style.backgroundColor = "#fff";
  } else {
    container.style.backgroundColor = "#fff";
    para.style.color = "#000";
    head.style.color = "#000";
    btn5.style.backgroundColor = "#000";
  }
  count++;
};

btn1.addEventListener("click", btn1Color);
btn2.addEventListener("click", btn2Color);
btn3.addEventListener("click", btn3Color);
btn4.addEventListener("click", btn4Color);
btn5.addEventListener("click", btn5Color);
