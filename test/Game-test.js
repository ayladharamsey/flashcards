const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');


describe('Game', function() {

    it('should be a function', function() {
      const game = new Game();
      expect(Game).to.be.a('function');
    });

    it('should create new instances of the game', function() {
      const game = new Game();
      game.start();
      expect(game.currentRound.turnCounter).to.equal(0);
    });
});