const img = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
];
const randomImg = Math.floor(Math.random() * img.length) + 1;
const imgBOX = document.querySelector("#disney img");
imgBOX.src = `../disney/${randomImg}.gif`;
imgBOX.append(disney);
