class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // Homescreen
        this.load.image('homescreen', './assets/Bliss.png');
    }

    create() {
        // create homescreen
        this.homescreen = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'homescreen').setOrigin(0,0);

        // monitor borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0x333333).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x333333).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0x333333).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x333333).setOrigin(0 ,0);

        // have main camera follow mouse inputs
        this.cameras.main.startFollow(this.input);
        this.cameras.main.setBounds(-game.config.width / 10, -game.config.height / 20, game.config.width * 1.5, game.config.height * 1.1);
    }
}