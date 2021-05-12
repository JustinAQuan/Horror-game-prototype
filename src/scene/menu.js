class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        // preload homescreen
        this.load.image('homescreen', './assets/Bliss.png');
    }

    create() {
        let scene = this;

        // create homescreen
        this.homescreen = this.add.sprite(0, 0, 'homescreen').setOrigin(0,0);
        
        // monitor borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0x333333).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x333333).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0x333333).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x333333).setOrigin(0 ,0);

        // title text (this can be made in combination with menu image)
        this.add.text(game.config.width/2, game.config.height/2, "Horror Game", {fontSize: "50px", color: 0xffffff}).setOrigin(.5,.5);

        // play text (this can be made into an image instead)
        this.play = this.add.text(game.config.width/2, game.config.height/1.5, "Start Game", {fontSize: "30px", color: 0xffffff}).setOrigin(.5,.5);
        this.play.setInteractive({ cursor: 'pointer' });
    
        // makes play text clickable
        this.play.on('pointerdown', function () {
            scene.scene.sleep("menuScene");
            scene.scene.start("playScene");
        });
    }
}