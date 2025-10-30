const buttons = document.querySelectorAll("button");

buttons.forEach((btn) =>
  btn.addEventListener(
    "click",
    (e) => (document.body.style.backgroundColor = e.target.id),
  ),
);
