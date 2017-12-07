var RPG = RPG || {};

RPG.TitleState = function () {
  'use strict';
  RPG.JSONLevelState.call(this);
};

RPG.TitleState.prototype = Object.create(RPG.JSONLevelState.prototype);
RPG.TitleState.prototype.constructor = RPG.TitleState;