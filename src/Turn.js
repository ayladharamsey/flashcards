class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    return this.guess === this.currentCard.correctAnswer ? true : false;
  }
  
  giveFeedback() {
    return this.evaluateGuess() === true ? 'Correct' : 'Incorrect';
  }
}

module.exports = Turn;
