
function instantiate_divs(number) {
	const container = document.querySelector(".container");

	container.innerHTML = "";

	for (let i = 0; i < number * number; i++) {
		const div = document.createElement("div");
		div.style.border = "1px solid blue";
		div.style.flex = `1 1 calc(${100 / number}% - 2px)`;
		div.style.aspectRatio = "1 / 1";
		div.addEventListener("mouseover", () => {
			div.style.background = "blue";
		});
		container.appendChild(div);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	instantiate_divs(16);

	const button = document.querySelector(".reset-button");

	button.addEventListener("click", () => {
		let size = parseInt(window.prompt("How big"));

		if (isNaN(size) || size <= 0 || size > 100) {
			alert("Invalid size, defaulting to 100");
			size = 100;
		}
		instantiate_divs(size);
	});
});


