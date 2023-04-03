// Code your solutions in this file
function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  function writeCards(namesArray, occasion) {
    let thankYouCards = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${occasion} gift!`;
      thankYouCards.push(message);
    }
  
    return thankYouCards;
  }
  