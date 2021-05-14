class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    init(data) {
        this.username = data.username;
    }

    preload() {
        // loads monitor
        this.load.image('homescreen', './assets/Desktop_bg.png');
        this.load.image('monitor_border', './assets/Monitor.png');
        this.load.image('ie', './assets/Internet_explorer.png');
        this.load.image('recycle_bin', './assets/Recycle_bin.png');
        this.load.image('inbox', './assets/Inbox.png');
        this.load.image('my_pc', './assets/My_computer.png');

        // loads room
        this.load.image('room', './assets/room.png');

        // loads outside
        this.load.image('test', './assets/test.png');

    }

    create() {
        // creates outside whenever we want
        // this.outside = this.add.tileSprite().setOrigin(0,0);

        // creates room
        this.room = this.add.sprite(-game.config.width / 5, -game.config.height / 20, 'room').setOrigin(0, 0);

        this.computer = this.add.container();

        // create monitor
        this.monitor_border = this.add.sprite(0, 0, 'monitor_border').setOrigin(0, 0);
        this.homescreen = this.add.sprite(monitorBorderX, monitorBorderY, 'homescreen').setOrigin(0, 0);

        // monitor icons
        this.myPC = this.add.sprite(monitorBorderX + 10, monitorBorderY + 20, 'my_pc').setOrigin(0, 0);
        this.inbox = this.add.sprite(monitorBorderX + 15, monitorBorderY * 2 + 40, 'inbox').setOrigin(0, 0);
        this.ie = this.add.sprite(monitorBorderX + 15, monitorBorderY * 4 + 20, 'ie').setOrigin(0, 0);
        this.rb = this.add.sprite(monitorBorderX + 15, monitorBorderY * 6 + 20, 'recycle_bin').setOrigin(0, 0);

        this.computer.add([this.monitor_border, this.homescreen, this.ie, this.rb, this.inbox, this.myPC]);

        //prototype looking around and hearing sounds
        this.time.delayedCall(3000, () => {
            // add instruction text
            this.instructions = this.add.text(
                game.config.width / 2,
                game.config.height - monitorBorderY * 4,
                "Press Space to look around the room", { fontSize: "30px", color: 0xffffff }
            ).setOrigin(0.5, 0);

            // play sound

            // add something to window
            this.beegyoshi = this.add.sprite(500, 0, 'test').setOrigin(0, 0);
            this.beegyoshi.setDepth(-1);
        }, null, this);

        // have main camera follow mouse inputs
        this.cameras.main.startFollow(this.input, false, 0.01, 0.01);

        // initializing spacebar as a keyboard input
        this.spaceKey = this.input.keyboard.addKey('SPACE');

        //check if mouse click works, can be removed later
        this.input.on('pointerup', function(pointer) {

            if (pointer.leftButtonReleased()) {
                console.log("left click")
            }
        });
    }

    update() {
        if (this.spaceKey.isDown) { // able to look around the room when pressing space
            this.cameras.main.setBounds(-game.config.width / 5, // x: -160
                -game.config.height / 20, // y: -30
                game.config.width * 1.5, // width: 1200 (therefore, can scroll right until 1040 pixels)
                game.config.height * 1.1); // height: 660 (therefore, can scroll down until 630 pixels)

            this.computer.setY(180);
            this.computer.setScale(.75);

            if (this.instructions) {
                this.instructions.destroy();
            }
        } else { // can only see screen monitor when not pressing space
            this.cameras.main.setBounds(
                0, // x: 0
                0, // y: 0
                game.config.width, // width: 800
                game.config.height); // height: 600


            this.monitor_border.setY(0);
            this.homescreen.setX(monitorBorderX);
            this.homescreen.setY(monitorBorderY);

            this.computer.setY(0);
            this.computer.setScale(1);
        }

        //add pointer and asset click event
        var pointer = this.input.activePointer;
        this.input.on('pointerdown', function() {
            if (pointer.worldX == monitorBorderX + 10 && pointer.worldY == monitorBorderY + 20) {
                //transition scene to myPC
                console.log("my computer")
            } else if (pointer.worldX == monitorBorderX + 15 && pointer.worldY == monitorBorderY * 2 + 40) {
                //transition scene to inbox
            } else if (pointer.worldX == monitorBorderX + 15 && pointer.worldY == monitorBorderY * 4 + 20) {
                //transition scene to ie
            } else if (pointer.worldX == monitorBorderX + 15 && pointer.worldY == monitorBorderY * 6 + 20) {
                //transition scene rb
            }

        })

        //update outside sprite to creepy stuff when stuff happens

        //test push
    }
}