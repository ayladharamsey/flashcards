const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentCards = [];
    this.currentRound;
    this.currentDeck;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.currentCards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer))
    this.currentDeck = new Deck(this.currentCards);
    this.currentRound = new Round(this.currentDeck, this);
    this.printMessage(this.currentDeck, this.currentRound);
    this.printQuestion(this.currentRound)
  }
}

module.exports = Game;