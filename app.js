// jshint esversion:6
document.addEventListener('DOMContentLoaded',()=>{

    const cardArray = [
        {
            name: 'fries',
            img: 'imgs/fries.png'
        },
        {
            name : 'fries' ,
            img : 'imgs/fries.png'
        },
        {
            name :'cheeseburger',
            img : 'imgs/cheeseburger.png'
        },
        {
        name :"cheeseburger",
        img : 'imgs/cheeseburger.png'
        },
        {
        name :"hotdog",
        img : 'imgs/hotdog.png'
        },
        {
        name :"hotdog",
        img : 'imgs/hotdog.png'
        },
        {
        name :"ice-cream",
        img : 'imgs/ice-cream.png'
        },
        {
        name :"ice-cream",
        img : 'imgs/ice-cream.png'
        },
        {
        name :"milkshake",
        img : 'imgs/milkshake.png'
        },
        {
        name :"milkshake",
        img : 'imgs/milkshake.png'
        },
        {
            name:"pizza",
            img:"imgs/pizza.png"
        },
        {
            name:"pizza",
            img:"imgs/pizza.png"
        }
    ] ;
        
     cardArray.sort(()=>0.5 - Math.random()) ;
     console.log(cardArray);
    const grid = document.querySelector('.grid') ;
    const resultDisplay = document.querySelector('#result') ;
     let   cardsChosen = [] ;
     let  cardsChosenId = [] ;
     let cardsWon = [] ;

    // create broad 
    // var card = document.createElement('img') ;

    function createBoard(){
        for(let i = 0; i<cardArray.length; i++){
    var card = document.createElement('img') ;

            card.src = 'imgs/blank.png' ;
            card.setAttribute('data-id',i) ;
            card.addEventListener('click',flipCard) ;
            grid.appendChild(card) ;

            // console.log(card);
        }
    }


      //check for match 
        function checkForMatch(){
            var cards = document.querySelectorAll('img') ;
            const optionOneId = cardsChosenId[0] ;
            const optionTwoId = cardsChosenId[1] ;
            if (cardsChosen[0] === cardsChosen[1]){
                alert('your found a match') ;

                cards[optionTwoId].removeEventListener('click',flipCard);
                cards[optionOneId].removeEventListener('click',flipCard);
                 

                cards[optionOneId].setAttribute('src','imgs/white.png') ;
                cards[optionTwoId].setAttribute('src','imgs/white.png') ;
                cardsWon.push(cardsChosen) ;
                // console.log( cardsWon.push(cardsChosen),cardsWon,cardsWon.length) ;
            } 
            else {
                alert('sorry, try again') ;

                 cards[optionOneId].src = 'imgs/blank.png' ;
                 cards[optionTwoId].src =  'imgs/blank.png' ;

                 cards[optionTwoId].addEventListener('click',flipCard);
                cards[optionOneId].addEventListener('click',flipCard);
            }  


            cardsChosen = [] ;
            cardsChosenId = [] ;
            resultDisplay.textContent = cardsWon.length ;
            if(cardsWon.length === cardArray.length/2) {
                resultDisplay.textContent += '  you won' ;
                //  createBoard().delete();
            }
        } 

      //flip your card 
         function flipCard(){
              var cardId = this.getAttribute('data-id') ;
              //   flipCard();
              this.removeEventListener('click',flipCard);
              cardsChosen.push(cardArray[cardId].name) ;
              cardsChosenId.push(cardId) ;
               this.setAttribute('src',cardArray[cardId].img) ;
               if(cardsChosen.length === 2 ) {
                   setTimeout(checkForMatch, 50) ;
                    // checkForMatch() ;
               }
                

         } 

    createBoard() ;
});