class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // loads homescreen
        this.load.image('homescreen', './assets/Bliss.png');

        // loads room
        this.load.image('room', './assets/room.png');

        // loads outside
        // NEEDS TO BE DONE

    }

    create() {
        // creates outside whenever we want
        // this.outside = this.add.tileSprite().setOrigin(0,0);

        // creates room
        this.room = this.add.sprite(-game.config.width / 5, -game.config.height / 20, 'room').setOrigin(0,0);

        // create homescreen
        this.homescreen = this.add.sprite(0, 0, 'homescreen').setOrigin(0,0);
        this.homescreen.setScale(.61);

        // have main camera follow mouse inputs
        this.cameras.main.startFollow(this.input, false, 0.01, 0.01);

        // initializing spacebar as a keyboard input
        this.spaceKey = this.input.keyboard.addKey('SPACE');
    }

    update(){
        if(this.spaceKey.isDown){   // able to look around the room when pressing space
            this.cameras.main.setBounds(
                -game.config.width / 5,     // x: -160
                -game.config.height / 20,   // y: -30
                game.config.width * 1.5,    // width: 1200 (therefore, can scroll right until 1040 pixels)
                game.config.height * 1.1);  // height: 660 (therefore, can scroll down until 630 pixels)
            
            this.homescreen.setX(-50);
            this.homescreen.setY(150);
            this.homescreen.setScale(.5);
        }
        else{   // can only see screen monitor when not pressing space
            this.cameras.main.setBounds(
                0,                      // x: 0
                0,                      // y: 0
                game.config.width,      // width: 800
                game.config.height);    // height: 600

            this.homescreen.setX(0);
            this.homescreen.setY(0);
            this.homescreen.setScale(.61);
        }

        //update outside sprite to creepy stuff when stuff happens

        //test push
    }
}