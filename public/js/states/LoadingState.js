var RPG = RPG || {};

RPG.LoadingState = function () {
  'use strict';
  Phaser.State.call(this);
};

RPG.LoadingState.prototype = Object.create(Phaser.State.prototype);
RPG.LoadingState.prototype.constructor = RPG.LoadingState;

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
  var assets, asset_loader, asset_key, asset;
  assets = this.level_data.assets;
  for (asset_key in assets) { // load assets according to asset key
    asset = assets[asset_key];
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
  this.game.state.start('TitleState', true, false, this.level_data);
};