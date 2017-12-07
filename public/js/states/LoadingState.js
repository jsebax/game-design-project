var RPG = RPG || {};

RPG.LoadingState = function () {
  'use strict';
  Phaser.State.call(this);
};

RPG.LoadingState.prototype = Object.create(Phaser.State.prototype);
RPG.LoadingState.prototype.init = function (level_data) {
  'use strict';
  this.level_data = level_data;

  var loading_message = this.game.add.text(
    this.game.world.centerX, 
    this.game.world.centerY, 
    'Loading', 
    {
      font: '48px Kells', 
      fill: '#ffffff'
    }
  );
  loading_message.anchor.setTo(0.5, 0.5);
};

RPG.LoadingState.prototype.preload = function () {
  'use strict';
  var assets = this.level_data.assets;
  for (var asset_key in assets) {
    var asset = assets[asset_key];
    switch (asset.type) {
      case 'image':
        this.load.image(asset_key, asset.source);
        break;
      case 'spritesheet':
        this.load.spritesheet(asset_key, asset.source, asset.frame_width, asset.frame_height, asset.frames, asset.margin, asset.spacing);
        break;
    }
  }
};

RPG.LoadingState.prototype.create = function () {
  'use strict';
  console.log('starting title state');
};