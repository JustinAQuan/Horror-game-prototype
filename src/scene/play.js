class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // loads monitor
        this.load.image('homescreen', './assets/Desktop_bg.png');
        this.load.image('monitor_border', './assets/Monitor.png');
        this.load.image('ie', './assets/Internet_explorer.png');

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

        this.computer = this.add.container();

        // create monitor
        this.monitor_border = this.add.sprite(0, 0, 'monitor_border').setOrigin(0,0);
        this.homescreen = this.add.sprite(monitorBorderX, monitorBorderY, 'homescreen').setOrigin(0,0);
        this.ie = this.add.sprite(200, 200, 'ie').setOrigin(0,0);

        this.computer.add([this.monitor_border, this.homescreen, this.ie]);
        this.computer.setActive(true);

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
                
            this.computer.setY(180);    
            this.computer.setScale(.75);
        }
        else{   // can only see screen monitor when not pressing space
            this.cameras.main.setBounds(
                0,                      // x: 0
                0,                      // y: 0
                game.config.width,      // width: 800
                game.config.height);    // height: 600
            

            this.monitor_border.setY(0);
            this.homescreen.setX(monitorBorderX);
            this.homescreen.setY(monitorBorderY);

            this.computer.setY(0);
            this.computer.setScale(1);
        }

        //update outside sprite to creepy stuff when stuff happens

        //test push
    }
}