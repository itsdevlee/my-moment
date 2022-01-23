const user = localStorage.getItem("id");
const h1 = document.querySelector(".title h1");
h1.innerText = `Hello ${user}'s World`;

const imgArray = ["1", "2"];
const random = Math.floor(Math.random() * imgArray.length) + 1;
console.log(random);
document.body.style.backgroundImage = `url(img/${random}.gif)`;
