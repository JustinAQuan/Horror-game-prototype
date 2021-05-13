class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        // preload homescreen
        this.load.image('homescreen', './assets/Desktop_bg.png');
        this.load.image('monitor', './assets/Monitor.png');

        // load music
        this.load.audio('menu_music', './assets/testmenu.wav');
    }

    create() {
        let scene = this;

        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*#%&!";
        let Title = "Horror Game";

        // creates menu music
        this.menu_bgm = this.sound.add(
            'menu_music', 
            {
                volume: 1,
                loop: true,
                rate: 0.65
            }
        );
        this.menu_bgm.play();

        // create homescreen
        this.monitor = this.add.sprite(0, 0, 'monitor').setOrigin(0,0);
        this.homescreen = this.add.sprite(monitorBorderX, monitorBorderY, 'homescreen').setOrigin(0,0);

        // title text (this can be made in combination with menu image)
        this.title = this.add.text(game.config.width/2, game.config.height/2, Title, {fontSize: "50px", color: 0xffffff}).setOrigin(.5,.5);

        // play text (this can be made into an image instead)
        this.play = this.add.text(game.config.width/2, game.config.height/1.5, "Start Game", {fontSize: "30px", color: 0xffffff}).setOrigin(.5,.5);
        this.play.setInteractive({ cursor: 'pointer' });

        this.time.delayedCall(5000, function() {
            scene.time.addEvent({
                delay: 750,
                callback: function() {
                    let index = Math.floor(Math.random() * letters.length);
                    let i = Math.floor(Math.random() * Title.length);
                    Title = Title.replace(Title[i], letters.charAt(index));
                    scene.title.setText(Title);
                },
                loop: true,
            });
        });
    
        // makes play text clickable
        this.play.on('pointerdown', function () {
            scene.menu_bgm.stop();
            scene.scene.sleep("menuScene");
            scene.scene.start("playScene");
        });
    }
}