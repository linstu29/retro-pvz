document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'bread',
            img: 'img/bread.png'
        },
        {
            name: 'chicken',
            img: 'img/chicken.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'muffins',
            img: 'img/muffins.png'
        },
        {
            name: 'salmon',
            img: 'img/salmon.png'
        },
        {
            name: 'soup',
            img: 'img/soup.png'
        },
        {
            name: 'bread',
            img: 'img/bread.png'
        },
        {
            name: 'chicken',
            img: 'img/chicken.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'muffins',
            img: 'img/muffins.png'
        },
        {
            name: 'salmon',
            img: 'img/salmon.png'
        },
        {
            name: 'soup',
            img: 'img/soup.png'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random());
    //shortcut to shuffle an array randomly

    const gridDisplay = document.querySelector('#grid');
    const resultDisplay = document.querySelector('#result');

    let cardsChosen = [];
    let cardsChosenIds = [];
    const cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'img/leaves.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            gridDisplay.append(card);
        }
    }
    createBoard();

    function checkMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];
        console.log(cards);
        console.log('check for match');
        if (optionOneId == optionTwoId) {
            alert('You have clicked the same image!');
        }
        if (cardsChosen[0] == cardsChosen[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'image/blank.png');
            cards[optionTwoId].setAttribute('src', 'image/blank.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'image/blank.png');
            cards[optionTwoId].setAttribute('src', 'image/blank.png');
            alert('Sorry try again!');

        }
        resultDisplay.innerHTML = cardsWon.length
        cardsChosen = [];
        cardsChosenIds = [];

        if (cardsWon.length == cardsArray.length/2) {
            resultDisplay.innerHTML = 'Congratulations you found them all!'

        }

    }
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray, [cardId].name);
        cardsChosenIds.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
});
