const container = document.querySelector(".container");
const text = document.getElementById("text");

let totalTime = 20000; // 20s
let breathOutTime = totalTime / 2; // 10s
let holdTime = totalTime / 10; // 2s
let breathInTime = totalTime - breathOutTime - holdTime;

document.documentElement.style.setProperty('--grow-duration', `${breathInTime / 1000}s`);
document.documentElement.style.setProperty('--shrink-duration', `${breathOutTime / 1000}s`);
document.documentElement.style.setProperty('--total-duration', `${totalTime / 1000}s`);

meditateAnimation();

function meditateAnimation() {
  console.log("start");
  text.innerHTML = "Breath in";
  container.className = "container grow";
  setTimeout(() => {
    text.innerHTML = "stop";

    setTimeout(() => {
      text.innerHTML = "breath out";
      container.className = "container shrink";
    }, holdTime);
  }, breathInTime);
}

setInterval(meditateAnimation, totalTime);