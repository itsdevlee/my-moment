const quotes = [
  {
    title: "Remember you're the one who can fill the world with sunshine",
    author: "Snow White and the seven dwarfs",
  },
  {
    title:
      "Even if it's not special If you believe it's special,It's gonna be special ",
    author: "Lion King",
  },
  {
    title: "Look inside yourself, you are more than what you bave become",
    author: "Lion King",
  },
  {
    title: "The very things that hold you down are going to lift you up",
    author: "Dumbo",
  },
  {
    title:
      "When life gets you down, do you wanna know what you've gotta do? Just keep swimming!",
    author: "Dory,Finding Nemo",
  },
  { title: "To infinity and beyond", author: "Toystory" },
  {
    title: "Hi,everyone. I'm Olaf and I like warm hugs!",
    author: "Olaf,Frozen",
  },
  { title: "Hakuna Matata!", author: "Lion King" },
  {
    title: "If you do only what you can, you'll never be better than now",
    author: "Winnie the Pooh",
  },
  {
    title: "Sometimes the right path is not the easiest one",
    author: "Pocahontas",
  },
  {
    title: "If you keep on believing the dream that you wisg will come true",
    author: "Cinderella",
  },
  {
    title: "The only thing predictable about life it's unpredictability",
    author: "Ratatouille",
  },
  {
    title:
      "Every day, Every minute, Every second, you have a chance to change your life",
    author: "Dumbo",
  },

  {
    title: "Magic can happen only when you have an earnest desire",
    author: "Chindella",
  },
  {
    title: "You stil have enough time to make your dreams come true",
    author: "피터팬",
  },

  {
    title:
      "Only I can determine my own mood. And today, perhaps, I will choose happiness",
    author: "이상한 나라의 앨리스",
  },
  {
    title:
      "Anyone can be anything. Nobody can say to me what I should do or not with my dreams!",
    author: "주토피아",
  },
  {
    title: "역경을 이겨내고 핀 꽃이 제일 아름다운 꽃이니라",
    author: "뮬란",
  },
];

const randomQu = quotes[Math.floor(Math.random() * quotes.length)];
const title = document.querySelector("#quotes_title");
const author = document.querySelector("#quotes_author");
title.textContent = randomQu.title;
author.textContent = `-${randomQu.author}`;
