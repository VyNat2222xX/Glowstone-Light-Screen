const $form = document.querySelector("#addform");
const $inputname = document.querySelector("#light-name");
const $spanerror = document.querySelector("#name-error");
const $sectionlightgrid = document.querySelector("#lights-grid");

$form.addEventListener("submit", (e) => {
	e.preventDefault();

	if ($inputname.value.length >= 3) {
		$spanerror.textContent = "";
		console.log("Creating light...");

		let div = document.createElement("div");
		let buttontoggle = document.createElement("button");
		let buttondelete = document.createElement("button");
		let imgglowstone = document.createElement("img");
		let h3name = document.createElement("h3");
		let pstatus = document.createElement("p");

		buttontoggle.textContent = "Turn ON";
		buttondelete.textContent = "Delete";
		h3name.textContent = $inputname.value;
		pstatus.textContent = "OFF";

		imgglowstone.src = "/assets/glowstone-off.webp";
		imgglowstone.alt = "glowstone offline";

		div.classList.add("light-card");
		buttondelete.classList.add("delete-btn");
		pstatus.classList.add("status-badge");

		$sectionlightgrid.appendChild(div);
		div.appendChild(imgglowstone);
		div.appendChild(h3name);
		div.appendChild(pstatus);
		div.appendChild(buttontoggle);
		div.appendChild(buttondelete);

		$inputname.value = "";

		console.log("Light created!");
	} else {
		$spanerror.textContent = "Invalid name!";
	}
});

// CONTENT LOAD

document.addEventListener("DOMContentLoaded", () => {
	console.info("HTML Content loaded!");
});

console.info("JS Content loaded!");
