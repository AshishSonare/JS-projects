document.addEventListener("DOMContentLoaded", () => {
  const clock = document.querySelector("#clock");

  setInterval(() => {
    let date = new Date();
    clock.innerText = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }, 1000);
});
