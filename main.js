function moveUp(button) {
  const buttonDiv = button.parentElement;
  if (buttonDiv.previousElementSibling) {
    buttonDiv.parentElement.insertBefore(
      buttonDiv,
      buttonDiv.previousElementSibling
    );
  }
}

function moveDown(button) {
  const buttonDiv = button.parentElement;
  if (buttonDiv.nextElementSibling) {
    buttonDiv.parentElement.insertBefore(
      buttonDiv.nextElementSibling,
      buttonDiv
    );
  }
}

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".neon");
let body = document.querySelector(".landing");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
body.onclick = () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
