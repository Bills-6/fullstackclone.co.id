const navbar = document.querySelector(".navbar-collapse"),
	ham = document.querySelector(".hamburger-bar");

ham.addEventListener("click", () => {
	navbar.classList.toggle("show");
});
