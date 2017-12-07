var RPG = RPG || {};

RPG.TitleState = function () {
  'use strict';
  Phaser.State.call(this);
};

RPG.TitleState.prototype = Object.create(Phaser.State.prototype);
RPG.TitleState.prototype.constructor = RPG.TitleState;

RPG.TitleState.prototype.init = function () {
  'use strict';
  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
};

RPG.TitleState.prototype.preload = function () {
  'use strict';
  this.load.image('background_image', 'assets/images/battle/background.png');
};

RPG.TitleState.prototype.create = function () {
  'use strict';
  var background = this.game.add.sprite(0, 0, 'background_image');

  var title_text = this.game.add.text(100, 100, 'Phaser RPG');
};