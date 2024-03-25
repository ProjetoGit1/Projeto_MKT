document.querySelectorAll(".thumbnail").forEach((item) => {
	item.addEventListener("click", function (event) {
		document.querySelectorAll(".thumbnail").forEach((thumb) => {
			thumb.classList.remove("active");
		});

		this.classList.add("active");

		document.getElementById("mainImage").src = this.src;
	});
});

const errorMessages = [
	"Oops! Looks like we've hit a snag. All tickets have danced away!",
	"Oh no! The tickets have taken a curtain call. None left!",
	"Looks like the tickets are playing hide and seek, and they're too good at hiding!",
	"Bummer! The tickets have left the building. Stay tuned for an encore!",
	"Yikes! The tickets vanished faster than a magician's rabbit. None are available!",
	"Uh-oh! It appears the tickets have gone on a little adventure of their own. Missing in action!",
	"Whoops! Looks like the tickets are on a break. Check back later!",
	"Alas! The tickets have been swept away by a gust of wind. Better luck next time!"
];

function getRandomErrorMessage() {
	const index = Math.floor(Math.random() * errorMessages.length);
	return errorMessages[index];
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#add-to-cart");
const errorMessage = document.querySelector("#error-message");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
	document.body.classList.add("body-no-scroll");
	document.body.style.setProperty(
		"--scrollbar-width",
		window.innerWidth - document.documentElement.clientWidth + "px"
	);
	errorMessage.innerHTML = getRandomErrorMessage();
	dialog.showModal();
});

closeButton.addEventListener("click", () => {
	document.body.classList.remove("body-no-scroll");
	dialog.close();
});
