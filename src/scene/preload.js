class preload extends Phaser.Scene {
    constructor(){
        super("preloadScene");
    }

    preload(){

        /////////////////////////////
        //       MENU SCENE        //
        /////////////////////////////

        // preload homescreen
        this.load.image('homescreen', './assets/art/Desktop_bg.png');
        this.load.image('monitor', './assets/art/Monitor.png');

        this.load.image('login', './assets/art/login.png');

        // load music
        this.load.audio('menu_music', './assets/sound/testmenu.wav');
        this.load.audio('keyboard', './assets/sound/keyboard.wav');

        
        /////////////////////////////
        //       PLAY SCENE        //
        /////////////////////////////

        // LOADS MAIN MONITOR
        this.load.image('homescreen', './assets/art/Desktop_bg.png');
        this.load.image('monitor_border', './assets/art/Monitor.png');
        this.load.image('ie', './assets/art/Internet_explorer.png');
        this.load.image('recycle_bin', './assets/art/Recycle_bin.png');
        this.load.image('inbox', './assets/art/Inbox.png');
        this.load.image('my_pc', './assets/art/My_computer.png');


        // LOADS ROOM
        this.load.image('room', './assets/art/room.png');


        // LOADS OUTSIDE
        this.load.image('Beeg Yoshi', './assets/art/test.png');


        // LOADS DUMMY WINDOWS
        this.load.image('rb_window', './assets/art/Recycle_binTemplate.png');
        this.load.image('mypc_window', './assets/art/My_computerTemplate.png');


        // LOADS INBOX
        this.load.image('inbox_window', './assets/art/Inbox_window.png');
        this.load.image('email', './assets/art/Email_inboxTemplate.png');
        this.load.image('email_window', './assets/art/Email_template.png');

        // LOADS PATH1_1
        this.load.image('webpage', './assets/art/reallygoodwebpage.png');
        this.load.image('link1_1_1', './assets/art/linkex.png');


        // LOADS AUDIO
        this.load.audio('click', './assets/sound/click.wav');
        this.load.audio('double_click', './assets/sound/double_click.wav');
        this.load.audio('weird', './assets/sound/weird.wav');
        this.load.audio('startup', './assets/sound/startup.wav');


        // LOADS JSON
        this.load.json('emailHeader', './assets/json/email.json');
    }

    create(){
        this.scene.start("menuScene");
    }
}