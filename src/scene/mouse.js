var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'mouse',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var text1;
var text2;

var game = new Phaser.Game(config);

function preload() {
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

function create() {

    // creates outside whenever we want
    // this.outside = this.add.tileSprite().setOrigin(0,0);

    // creates room
    this.room = this.add.sprite(-game.config.width / 5, -game.config.height / 20, 'room').setOrigin(0, 0);

    this.computer = this.add.container();
    /*
        // create monitor
        this.monitor_border = this.add.sprite(0, 0, 'monitor_border').setOrigin(0, 0);
        this.homescreen = this.add.sprite(monitorBorderX, monitorBorderY, 'homescreen').setOrigin(0, 0);

        // monitor icons
        this.myPC = this.add.sprite(monitorBorderX + 10, monitorBorderY + 20, 'my_pc').setOrigin(0, 0);
        this.inbox = this.add.sprite(monitorBorderX + 15, monitorBorderY * 2 + 40, 'inbox').setOrigin(0, 0);
        this.ie = this.add.sprite(monitorBorderX + 15, monitorBorderY * 4 + 20, 'ie').setOrigin(0, 0);
        this.rb = this.add.sprite(monitorBorderX + 15, monitorBorderY * 6 + 20, 'recycle_bin').setOrigin(0, 0);

        this.computer.add([this.monitor_border, this.homescreen, this.ie, this.rb, this.inbox, this.myPC]);
    */
    text1 = this.add.text(10, 10, '', { fill: '#00ff00' });
    text2 = this.add.text(500, 10, '', { fill: '#00ff00' });

    this.input.mouse.disableContextMenu();

    this.input.on('pointerup', function(pointer) {

        if (pointer.leftButtonReleased()) {
            console.log('Left Button');
        } else if (pointer.rightButtonReleased()) {
            console.log('Right Button');
        }
    });
}

function update() {
    var pointer = this.input.activePointer;

    text1.setText([
        'x: ' + pointer.worldX,
        'y: ' + pointer.worldY,
        'isDown: ' + pointer.isDown
    ]);
}