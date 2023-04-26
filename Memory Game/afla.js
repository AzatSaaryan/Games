const card = [
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
]

card.sort(() => 0.5 - Math.random());

function createBoard() {
    for (let i = 0; i < card.length; i++) {
      const cardArray = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      gridDisplay.appendChild(card);
    }
  }

console.log(card);