document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("toggle-image");

  image.addEventListener("click", function () {
      image.classList.toggle("border-red");
  });

  const homeButton = document.getElementById("home-button");
  homeButton.addEventListener("click", goToHome);
});

function goToHome() {
  window.location.href = "index.html";
}

