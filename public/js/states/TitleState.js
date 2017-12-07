var RPG = RPG || {};

RPG.TitleState = function () {
  'use strict';
  RPG.JSONLevelState.call(this);

  this.prefab_classes = {
    background: RPG.Prefab.prototype.constructor,
    text: RPG.TextPrefab.prototype.constructor
  };
};

RPG.TitleState.prototype = Object.create(RPG.JSONLevelState.prototype);
RPG.TitleState.prototype.constructor = RPG.TitleState;

RPG.TitleState.prototype.create = function () {
  'use strict';
  RPG.JSONLevelState.prototype.create.call(this);

  this.game.input.onDown.add(this.start_game, this);
};

RPG.TitleState.prototype.start_game = function () {
  'use strict';
  console.log('starting next state');
};