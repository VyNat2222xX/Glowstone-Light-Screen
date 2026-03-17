const $dialogmenu = document.querySelector("#menu");
const $btnlight = document.querySelector("light");

$btnlight.addEventListener("click", () => {
	$dialogmenu.showModal();
});
