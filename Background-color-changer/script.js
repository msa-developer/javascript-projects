const buttonContainer = document.querySelector(".buttonContainer");

buttonContainer.addEventListener("click", (e) => {
  document.body.style.backgroundColor = e.target.className;
});
