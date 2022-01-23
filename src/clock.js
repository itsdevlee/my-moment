const today = document.querySelector("#date");
const time = document.querySelector("#time");
function getClock() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1);
  const months = month.padStart(2, "0");
  const day = String(date.getDate());
  const days = day.padStart(2, "0");

  const hour = String(date.getHours());
  const hours = hour.padStart(2, "0");

  const minute = String(date.getMinutes());
  const minutes = minute.padStart(2, "0");

  const second = String(date.getSeconds());
  const seconds = second.padStart(2, "0");

  today.innerText = `${year}-${months}-${days}`;
  time.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
