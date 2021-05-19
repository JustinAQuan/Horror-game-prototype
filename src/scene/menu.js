class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        // preload homescreen
        this.load.image('homescreen', './assets/art/Desktop_bg.png');
        this.load.image('monitor', './assets/art/Monitor.png');

        this.load.image('login', './assets/art/login.png');

        // load music
        this.load.audio('menu_music', './assets/sound/testmenu.wav');
        this.load.audio('keyboard', './assets/sound/keyboard.wav');
    }

    create() {
        let scene = this;

        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*#%&!";
        let Title = "NEVER ALONE";

        // creates menu music
        this.menu_bgm = this.sound.add(
            'menu_music', 
            {
                volume: 0.7,
                loop: true,
                rate: 0.65
            }
        );
        this.menu_bgm.play();

        // create homescreen
        this.monitor = this.add.sprite(0, 0, 'monitor').setOrigin(0,0);
        this.homescreen = this.add.sprite(monitorBorderX, monitorBorderY, 'homescreen').setOrigin(0,0);

        // title text (this can be made in combination with menu image)
        this.title = this.add.text(game.config.width / 2, game.config.height / 2 - 50, Title, {fontFamily: 'VT323', fontSize: "100px", color: 0xffffff}).setOrigin(.5,.5);

        // adds clickable login text
        this.login = this.add.sprite(game.config.width / 2, game.config.height / 1.5, 'login').setOrigin(0.5,0.5);
        this.login.setInteractive({ cursor: 'pointer' });
        this.clicked = false;

        // after a 5 second delay
        this.time.delayedCall(4000, function() {
            scene.time.addEvent({
                delay: 1000,

                // function gets a random char from letters
                callback: function() {
                    let index = Math.floor(Math.random() * letters.length);
                    let i = Math.floor(Math.random() * (Title.length - 1));

                    if(i >= 5){
                        ++i;
                    }

                    // replaces a random char from title with one from letters
                    Title = Title.replace(Title[i], letters.charAt(index));
                    scene.title.setText(Title);
                },
                loop: true,
            });
        });

        // when player clicks on login
        this.login.on('pointerdown', function () {
            if(scene.clicked == false){
                scene.clicked = true;                   // sets clicked to true, so no spam
                scene.menu_bgm.stop();                  // stops menu music
                scene.sound.play('keyboard');           // starts keyboard sound effect
                scene.time.delayedCall(2000, function(){
                    scene.clicked = false;
                    scene.scene.sleep("menuScene");         // puts menuScene to sleep
                    scene.scene.launch("playScene");        // starts playScene and passes name
                });
            }
        });
    }

    update() {
        if(this.menu_bgm.rate > .35) this.menu_bgm.setRate(this.menu_bgm.rate - 0.0003);
    }
}