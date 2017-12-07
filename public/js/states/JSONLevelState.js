var RPG = RPG || {};

RPG.JSONLevelState = function () {
  'use strict';
  Phaser.State.call(this);
};

RPG.JSONLevelState.prototype = Object.create(Phaser.State.prototype);
RPG.JSONLevelState.prototype.constructor = RPG.JSONLevelState;

RPG.JSONLevelState.prototype.init = function (level_data) {
  'use strict';
  this.level_data = level_data;
};

RPG.JSONLevelState.prototype.create = function () {
  'use strict';
  this.groups = {};
  this.level_data.groups.forEach(function (group_name) {
    this.groups[group_name] = this.game.add.group();
  }, this);

  this.sprites = {};
  for (var sprite_name in this.level_data.sprites) {
    var sprite_data = this.level_data.sprites[sprite_name];
    switch (sprite_data.type) {
      case 'sprite':
        var sprite = this.game.add.sprite(sprite_data.position.x, sprite_data.position.y, sprite_data.texture);
        break;
      case 'text':
        var sprite = this.game.add.text(sprite_data.position.x, sprite_data.position.y, sprite_data.text, sprite_data.style);
        break;
    }
    this.sprites[sprite_name] = sprite;
    this.groups[sprite_data.group].add(sprite);
  }
};