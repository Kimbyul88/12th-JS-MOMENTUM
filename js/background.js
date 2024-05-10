const images = ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"];
const BG = "background";

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.className = BG;

const bgAfter = document.createElement("div");
bgAfter.className = "background-cover";

document.body.appendChild(bgAfter);
document.body.appendChild(bgImage);
