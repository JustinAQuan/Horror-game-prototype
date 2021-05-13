class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // Homescreen
        game.load.image('homescreen', 'assets/Bliss Homescreen.png');
    }

    create() {
        // create homescreen
        homescreen = game.add.tileSprite(0, 0, game.config.width, game.config.height, 'homescreen')

        // monitor borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0x333333).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x333333).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0x333333).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x333333).setOrigin(0 ,0);
    }
}