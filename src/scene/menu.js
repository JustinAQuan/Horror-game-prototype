class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        // preload homescreen
        this.load.image('homescreen', '/assets/Bliss.png');
    }

    create() {
        // create homescreen
        this.homescreen = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'homescreen').setOrigin(0,0);
        
        // monitor borders
        this.topBorder = this.add.rectangle(0, 0, game.config.width, borderUISize, 0x333333).setOrigin(0 ,0);
        this.bottomBorder = this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x333333).setOrigin(0 ,0);
        this.leftBorder = this.add.rectangle(0, 0, borderUISize, game.config.height, 0x333333).setOrigin(0 ,0);
        this.rightBorder =this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x333333).setOrigin(0 ,0);

        // create fuzziness around homescreen
        this.borders = (
            this.add.rectangle(borderUISize/1.1, borderUISize/1.1, game.config.width - borderUISize*1.7, borderUISize/8, 0xEEEEEE, 0.8).setOrigin(0 ,0),
            this.add.rectangle(borderUISize/1.1, game.config.height - borderUISize, game.config.width - borderUISize*1.7, borderUISize/8, 0xEEEEEE, 0.8).setOrigin(0 ,0),
            this.add.rectangle(borderUISize/1.1, borderUISize/1.1, borderUISize/8, game.config.height - borderUISize*1.7, 0xEEEEEE, 0.8).setOrigin(0 ,0),
            this.add.rectangle(game.config.width - borderUISize, borderUISize/1.1, borderUISize/8, game.config.height - borderUISize*1.7, 0xEEEEEE, 0.8).setOrigin(0 ,0)
        );

        borders.setBlendMode(Phaser.BlendModes.ADD);

        // title
        this.add.text(game.config.width/2, game.config.height/2, "Horror Game", {fontSize: "50px", color: 0xffffff}).setOrigin(.5,.5);
    }
}