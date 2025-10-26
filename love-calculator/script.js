const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const boy = document.getElementById("boy");
  const girl = document.getElementById("girl");

  const boy_length = boy.value.length;
  const girl_length = girl.value.length;

  const res = Math.pow(boy_length + girl_length, 3) % 101;

  document.querySelector("h2").textContent =
    `Your Love Percentage is : ${res}%`;
  form.reset();
});
