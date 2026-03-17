const $btnswitch = document.querySelector("#light");
const $dialog = document.querySelector("#menu");
let $stat = document.querySelector("#menu-code-status");
const $span = document.querySelector("#menu-span-status");
let $img = document.querySelector("#glowstone");

let isOn = false;

$btnswitch.addEventListener("click", () => {
	$dialog.showModal();
});

$dialog.addEventListener("submit", () => {
	if (isOn === false) {
		$stat.textContent = "OFF";
		$span.textContent = "OFF";

		document.body.classList.remove("light-off");
		document.body.classList.add("light-on");

		$img.src = "assets/glowstone-on.webp";

		isOn = true;
	} else if (isOn === true) {
		$stat.textContent = "ON";
		$span.textContent = "ON";

		document.body.classList.remove("light-on");
		document.body.classList.add("light-off");

		$img.src = "assets/glowstone-off.webp";

		isOn = false;
	}
});
