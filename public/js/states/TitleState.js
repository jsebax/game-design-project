var RPG = RPG || {};

RPG.TitleState = function () {
  'use strict';
  Phaser.State.call(this);
};

RPG.TitleState.prototype = Object.create(Phaser.State.prototype);
RPG.TitleState.prototype.constructor = RPG.TitleState;

RPG.TitleState.prototype.create = function () {
  'use strict';
  var background = this.game.add.sprite(0, 0, 'background_image');

  var title_text = this.game.add.text(100, 100, 'Phaser RPG');
};