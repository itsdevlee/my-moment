const imgArray = ["1", "2", "3"];
const random = Math.floor(Math.random() * imgArray.length) + 1;
console.log(random);
document.body.style.backgroundImage = `url(../img/${random}.gif)`;
