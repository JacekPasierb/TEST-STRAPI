const menuOverlay = document.querySelector(".mobile-menu");

const openMenuBtn = document.querySelector(".mobile__menu--button");

openMenuBtn.addEventListener("click", (e) => {
	menuOverlay.style.display = "block";
	const closeMenuBtn = document.querySelector(".mobile-menu__close-button");
	console.log("ko", closeMenuBtn);
	closeMenuBtn.addEventListener("click", (e) => {
    console.log('close');
	menuOverlay.style.display = "none";
});
});
console.log("ko", closeMenuBtn);
console.log("open", openMenuBtn);

