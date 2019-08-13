const Turn = require('../src/Turn');
;

class Round {
  constructor(deck) {
    this.cardDeck = deck || [];
    this.turnCounter = 0;
    this.incorrectGuesses = [];
  }
  
  returnCurrentCard () {
    return this.cardDeck.cardDeck[this.turnCounter]
  }

  takeTurn(userGuess) {
    const turn = this.createTurn(userGuess)
    this.turnCounter++
    turn.evaluateGuess() === false ? this.incorrectGuesses.push(this.returnCurrentCard().id) : null;
    return turn.giveFeedback();
  }

  createTurn(userGuess) {
    return new Turn(userGuess, this.returnCurrentCard())
  }

  calculatePercentCorrect() {
    return Math.round(100 - (this.incorrectGuesses.length * 100) / this.turnCounter)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;