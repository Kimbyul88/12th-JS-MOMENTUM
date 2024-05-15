const clock = document.querySelector("h2#clock");
const hour = document.querySelector("#clock-hour");
const min = document.querySelector("#clock-min");
const sec = document.querySelector("#clock-sec");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  hour.innerText = `${hours}`;
  min.innerText = `${minutes}`;
  sec.innerText = `${seconds}`;
}

clock.className = "clock-font";

getClock();
setInterval(getClock, 1000);
