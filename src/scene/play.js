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
        this.room = this.add.tileSprite(-game.config.width / 5, -game.config.height / 20, 1200, 900, 'room').setOrigin(0,0);

        // create homescreen
        this.homescreen = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'homescreen').setOrigin(0,0);

        // monitor borders
        this.add.rectangle(0, 0, game.config.width, borderUISize + 10, 0xd4d4b8).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize - 10, game.config.width, borderUISize + 10, 0xd4d4b8).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize + 10, game.config.height, 0xd4d4b8).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize - 10, 0, borderUISize + 10, game.config.height, 0xd4d4b8).setOrigin(0 ,0);

        // have main camera follow mouse inputs
        this.cameras.main.startFollow(this.input);

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
        }
        else{   // can only see screen monitor when not pressing space
            this.cameras.main.setBounds(
                0,                      // x: 0
                0,                      // y: 0
                game.config.width,      // width: 800
                game.config.height);    // height: 600
        }

        //update outside sprite to creepy stuff when stuff happens

        //test push
    }
}