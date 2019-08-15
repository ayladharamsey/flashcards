const Turn = require('../src/Turn');
;

class Round {
  constructor(deck, game) {
    this.cardDeck = deck || [];
    this.turnCounter = 0;
    this.incorrectGuesses = [];
    this.roundCounter = 0;
    this.game = game;
  }
  
  returnCurrentCard () {
    return this.cardDeck.cardDeck[this.turnCounter]
  }

  takeTurn(userGuess) {
    const currCard = this.returnCurrentCard
    const turn = this.createTurn(userGuess)
    this.turnCounter++
    turn.evaluateGuess() === false ? this.incorrectGuesses.push(currCard.id) : null;
    return turn.giveFeedback();
  }

  createTurn(userGuess) {
    return new Turn(userGuess, this.returnCurrentCard())
  }

  calculatePercentCorrect() {
    return Math.round(100 - (this.incorrectGuesses.length * 100) / this.turnCounter)
  }

  endRound() {
    this.roundCounter++
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    
    if (this.calculatePercentCorrect() < 85) {
      this.game.start()
    }

  }
}


module.exports = Round;