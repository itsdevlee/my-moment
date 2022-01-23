const user = localStorage.getItem("id");
const h1 = document.querySelector(".title h1");
h1.innerText = `Hello ${user}'s World`;
