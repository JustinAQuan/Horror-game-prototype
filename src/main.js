let aspectSize = 300;

let config = {
    type: Phaser.CANVAS,
    width: aspectSize * 4,
    height: aspectSize * 3,
    scene: [menu],
};
 
let game = new Phaser.Game(config);

let borderUISize = game.config.height / 25;
let borderPadding = borderUISize / 3;