var RPG = RPG || {};

var game = new Phaser.Game(640, 480, Phaser.CANVAS);

game.state.add('TitleState', new RPG.TitleState());
game.state.start('TitleState');
