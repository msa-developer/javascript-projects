const button = document.querySelector(".buttonContainer");

button.addEventListener("click", (e) => {
  document.body.style.backgroundColor = e.target.id;
});
