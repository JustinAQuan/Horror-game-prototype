class preload extends Phaser.Scene {
    constructor(){
        super("preloadScene");
    }

    preload(){

        /////////////////////////////
        //       MENU SCENE        //
        /////////////////////////////

        this.load.image('login', './assets/art/login.png');
        this.load.image('close_button', './assets/art/close_button.png');

        // load music
        this.load.audio('menu_music', './assets/sound/sfx/testmenu.wav');
        this.load.audio('keyboard', './assets/sound/sfx/sfx_keyboard.wav');


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


        // LOADS DUMMY WINDOWS
        this.load.image('rb_window', './assets/art/Recycle_binTemplate.png');
        this.load.image('mypc_window', './assets/art/My_computerTemplate.png');
        

        // WEBPAGE PRELOADS
        this.load.image('ie_window', './assets/art/Internet_ui.png');
        this.load.image('404', './assets/art/404.jpg');


        // LOADS INBOX
        this.load.image('inbox_window', './assets/art/Inbox_window.png');
        this.load.image('email', './assets/art/Email_inboxTemplate.png');
        this.load.image('email_window', './assets/art/Email_template.png');

        // LOADS PATH1_1

        // LOADS PATH1_2
        this.load.image('webpage1_2', './assets/art/page1_2.png');
        this.load.image('link1_2', './assets/art/page1_2_link.png');

        // LOADS PATH1_3
        this.load.image('webpage1_3.1', './assets/art/page1_3_part1.png');
        this.load.image('webpage1_3.2', './assets/art/page1_3_part2.png');
        this.load.image('link1_3', './assets/art/page1_3_link.png');

        // LOADS PATH2_1

        // LOADS PATH2_2
        this.load.image('webpage2_2', './assets/art/page2_2.png');
        this.load.image('link2_2', './assets/art/page2_2_link.png');

        // LOADS PATH2_3

        // LOADS PATH3_1
        this.load.image('webpage3_1', './assets/art/page3_1.png');
        this.load.image('link3_1', './assets/art/page3_1_link.png');
        this.load.image('play_button', './assets/art/page3_1_play_button.png');

        // LOADS PATH3_2

        // LOADS PATH3_3


        // LOADS GENERIC
        this.load.image('webpage', './assets/art/reallygoodwebpage.png');
        this.load.image('linkex', './assets/art/linkex.png');


        // LOADS AUDIO
        this.load.audio('click', './assets/sound/sfx/sfx_click.wav');
        this.load.audio('double_click', './assets/sound/sfx/sfx_double_click.wav');
        this.load.audio('weird', './assets/sound/web_audio/web_mus1.wav');
        this.load.audio('startup', './assets/sound/sfx/startup.wav');
        this.load.audio('bg_1', './assets/sound/bgm/bg_1.wav');


        // LOADS JSON
        this.load.json('emailHeader', './assets/json/email.json');

        
        // LOADS BEEG YOSHI
        this.load.image('Beeg Yoshi', './assets/art/test.png');
    }

    create(){
        this.scene.start("menuScene");
    }
}