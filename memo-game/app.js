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
    const grid = document.querySelector('.grid');
    const result = document.querySelector('.result')

    let selectedCards = []
    let selectedCardIds = []
    let resultSum = 0

    cardArray.sort(() => 0.5 - Math.random());


    function createGrid(array) {
        result.textContent(array0) {
        for (let i = 0; i < array.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'img/leaves.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', () => clickOnCard(array[i], i, card))
            grid.appendChild(card)
            }
        }
    

    function clickOnCard(selectedCard, index, selectedCardElement) {
        selectedCard.push(selectedCard.name)
        selectedCardIds.push(index)
        selectedCardElement.setAttribute('src', selectedCard.img)

        if (selectedCards.length === 2) {
            setTimeout(compareCards, 500)
        }
    }

    function compareCards() {
        let cards = grid.querySelectorAll('img')
        if (selectedCardIds[0] === selectedCardIds[1]) {
            compareCards(cards[selectedCardIds[0]])
        } else {
            if (selectedCards[0] === selectedCards[1]) {
                comparedCardsIsEqual(cards[selectedCardIds[0], selectedCardIds[1]])
            } else {
                comparedCardsIsEqual(cards[selectedCardIds[0], selectedCardIds[1]])
            }
        }
    }

    function comparedSameCard(selectedCard) {
        selectedCard.setAttribute('src', 'img/blank.png')
        selectedCards = []
        selectedCardIds = []
        alert('Pasirinkai ta pacia korta')
    }

    function comparedCardsIsEqual(firstCard, secondCard) {
        firstCard.setAttribute('src', 'img/blank.png')
        secondCard.setAttribute('src', 'img/blank.png')
        firstCard.style.pointerEvents = 'none'
        secondCard.style.pointerEvents = 'none'
        selectedCards = []
        selectedCardIds = []
        alert('Teisingai!')
    }

    function comparedCardsIsNotEqual(firstCard, secondCard) {
        selectedCards = []
        selectedCardIds = []
        firstCard.setAttribute('src', 'img/leaves.png')
        secondCard.setAttribute('src', 'img/leaves.png')
        alert('Neatpejai. Bandyk dar karta')

    }
    }
    createGrid(cardArray)
})
