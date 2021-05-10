class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // Homescreen
        this.load.image('homescreen', './assets/Bliss.png');

        // room
        this.load.image('room', './assets/room.png');
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
        this.cameras.main.setBounds(-game.config.width / 10, -game.config.height / 20, game.config.width * 1.5, game.config.height * 1.1);

        this.spaceKey = this.input.keyboard.addKey('SPACE');
    }

    update(){
        if(this.spaceKey.isDown){
            this.cameras.main.setBounds(-game.config.width / 5, -game.config.height / 20, game.config.width * 1.5, game.config.height * 1.1);
        }

        else{
            this.cameras.main.setBounds(0, 0, game.config.width, game.config.height);
        }

        //update outside sprite to creepy stuff when stuff happens

        //test push
    }
}