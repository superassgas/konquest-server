/**
  Game Engine instance. Setups up everything for the game stage.

  This wraps a Phaser game.
*/
var GameEngine = module.exports = function (game) {
  // Cyclic dependencies
  this.game = game
  game.engine = this

  this.states = ['boot', 'play']
}

GameEngine.Weapons = require('./weapons')
GameEngine.States = require('./states')

GameEngine.prototype.start = function () {
  var self = this

  this.states.forEach(function (state) {
    self.game.state.add(state, new GameEngine.States.States[state])
  })
  this.game.state.start('boot')
}
