class preload extends Phaser.Scene {
    constructor(){
        super("preloadScene");
    }

    preload(){
        let scene = this;

        /////////////////////////////
        //      LOADING BAR        //
        /////////////////////////////

        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        let loadingText = this.make.text({
            x: game.config.width / 2,
            y: game.config.height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        let percentText = this.make.text({
            x: game.config.width / 2,
            y: game.config.height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            scene.scene.start("menuScene");
        });


        /////////////////////////////
        //       MENU SCENE        //
        /////////////////////////////

        this.load.image('login', './assets/art/login.png');
        this.load.image('close_button', './assets/art/close_button.png');

        // load music
        this.load.audio('menu_music', './assets/sound/bgm/bg_2.wav');
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
        this.load.image('webpage1_1', './assets/art/Page1_1.png');
        this.load.image('link1_1', './assets/art/page1_1_link.png');

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

        // music
        this.load.audio('bg_1', './assets/sound/bgm/bg_1.wav');
        this.load.audio('bg_2', './assets/sound/bgm/bg_2.wav');

        this.load.audio('bg_path1_1', './assets/sound/bgm/bg_path1_1.wav');
        this.load.audio('bg_path1_2', './assets/sound/bgm/bg_path1_2.wav');
        this.load.audio('bg_path1_3', './assets/sound/bgm/bg_path1_3.wav');
        this.load.audio('bg_path1_4', './assets/sound/bgm/bg_path1_4.wav');

        this.load.audio('bg_path2_1', './assets/sound/bgm/bg_path2_1.wav');
        this.load.audio('bg_path2_2', './assets/sound/bgm/bg_path2_2.wav');
        this.load.audio('bg_path2_3', './assets/sound/bgm/bg_path2_3.wav');
        this.load.audio('bg_path2_4', './assets/sound/bgm/bg_path2_4.wav');

        this.load.audio('bg_path3_1', './assets/sound/bgm/bg_path3_1.wav');
        this.load.audio('bg_path3_2', './assets/sound/bgm/bg_path3_2.wav');
        this.load.audio('bg_path3_3', './assets/sound/bgm/bg_path3_3.wav');
        this.load.audio('bg_path3_4', './assets/sound/bgm/bg_path3_4.wav');

        // sfx
        this.load.audio('click', './assets/sound/sfx/sfx_click.wav');
        this.load.audio('double_click', './assets/sound/sfx/sfx_double_click.wav');
        this.load.audio('startup', './assets/sound/sfx/startup.wav');

        // creepy
        this.load.audio('weird', './assets/sound/web_audio/web_mus1.wav');
        this.load.audio('laughing', './assets/sound/creepy/laughing.wav');
        this.load.audio('door_knock', './assets/sound/creepy/door_knocking1.wav');
        this.load.audio('drop_spoon', './assets/sound/creepy/dropping_spoon1.wav');
        this.load.audio('slam_desk', './assets/sound/creepy/slam_desk1.wav');
        this.load.audio('licking', './assets/sound/creepy/yucky_dog.wav');


        // LOADS JSON
        this.load.json('emailHeader', './assets/json/email.json');

        
        // LOADS BEEG YOSHI
        this.load.image('Beeg Yoshi', './assets/art/test.png');
    }
}