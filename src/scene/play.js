class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        let scene = this;
        this.curr = null;
        this.web3_3signal = true;

        this.emailFSD = this.cache.json.get('emailHeader');

        if (pathInput || pathInput == 0) {
            pathText.destroy();
        }

        //////////////////////////////
        //      MAIN CONTROLS       //
        //////////////////////////////

        // camera follows player's mouse
        this.cameras.main.startFollow(this.input, false, 0.01, 0.01);

        // initializing spacebar as a keyboard input
        this.spaceKey = this.input.keyboard.addKey('SPACE');
        this.escape = this.input.keyboard.addKey('ESC');

        // pause game when player presses esc
        this.escape.on('down', function() {
            scene.game.sound.stopAll();
            scene.scene.pause();
            scene.scene.launch("pause");
        });

        //////////////////////////////
        //       SOUND SETUP        //
        //////////////////////////////

        // BACKGROUND MUSIC

        this.bg_1 = this.sound.add(
            'bg_1', {
                volume: .5,
                loop: true,
                rate: .2
            }
        );

        this.bg_1_2 = this.sound.add(
            'bg_1', {
                volume: .5,
                loop: true,
                rate: .35
            }
        );

        this.bg_path1_1 = this.sound.add(
            'bg_path1_1', {
                volume: .5,
            }
        );

        this.bg_path1_2 = this.sound.add(
            'bg_path1_2', {
                volume: .5,
            }
        );

        this.bg_path1_3 = this.sound.add(
            'bg_path1_3', {
                volume: .5,
            }
        );

        this.bg_path1_4 = this.sound.add(
            'bg_path1_4', {
                volume: .5,
            }
        );

        this.bg_path2_1 = this.sound.add(
            'bg_path2_1', {
                volume: .5,
            }
        );

        this.bg_path2_2 = this.sound.add(
            'bg_path2_2', {
                volume: 1,
            }
        );

        this.bg_path2_3 = this.sound.add(
            'bg_path2_3', {
                volume: 1,
            }
        );

        this.bg_path2_4 = this.sound.add(
            'bg_path2_4', {
                volume: .5,
            }
        );

        this.bg_path3_1 = this.sound.add(
            'bg_path3_1', {
                volume: .5,
            }
        );

        this.bg_path3_2 = this.sound.add(
            'bg_path3_2', {
                volume: .5,
            }
        );

        this.bg_path3_3 = this.sound.add(
            'bg_path3_3', {
                volume: .5,
            }
        );

        this.bg_path3_4 = this.sound.add(
            'bg_path3_4', {
                volume: .5,
            }
        );

        this.bg_path1 = [this.bg_path1_1, this.bg_path1_2, this.bg_path1_3, this.bg_path1_4];
        this.bg_path2 = [this.bg_path2_1, this.bg_path2_2, this.bg_path2_3, this.bg_path2_4];
        this.bg_path3 = [this.bg_path3_1, this.bg_path3_2, this.bg_path3_3, this.bg_path3_4];

        // 3_1 music 
        this.web_mus1 = this.sound.add(
            'web_mus1',
        );

        this.web_mus2 = this.sound.add(
            'web_mus2', {
                volume: 2,
            }
        );

        this.web_mus3 = this.sound.add(
            'web_mus3', {
                rate: .4,
                volume: 0.4,
            }
        );

        // EVENT SFX

        this.scratching = this.sound.add(
            'scratching',
        );


        this.knocking = this.sound.add(
            'door_knock', {
                rate: .8,
                volume: 3,
            }
        );

        this.drop_spoon = this.sound.add(
            'drop_spoon',
            {
                volume: 0.6,
            }
        );

        this.slam_desk = this.sound.add(
            'slam_desk',
        );

        this.boom = this.sound.add(
            'boom', 
            {
                loop: true,
            }
        );

        //////////////////////////////
        //   INITIAL SCENE SETUP    //
        //////////////////////////////

        // background music set up

        this.time.delayedCall(6000, () => {
            this.bg_1.play();

            this.time.delayedCall(1000, () => {
                this.bg_1_2.play();
            });
        }, null, this);

        // creates outside whenever we want
        this.window_background = this.add.sprite(570, 150, 'window_background').setOrigin(0, 0)
        this.angel = this.add.sprite(2000, 0, 'angel').setOrigin(0, 0);

        this.sound.play('startup', { volume: 0.4 });

        // creates room
        this.room = this.add.sprite(-game.config.width / 5, -game.config.height / 20, 'room').setOrigin(0, 0);
        this.anims.create({
            key: 'light_effect',
            frames: this.anims.generateFrameNumbers('light_effect', { start: 0, end: 8, first: 0 }),
            frameRate: 8
        });

        let light_effect = scene.add.sprite(0, 0, 'light_effect').setAlpha(0).setOrigin(0, 0);

        
            

        //////////////////////////////
        //      MONITOR SETUP       //
        //////////////////////////////

        this.computer = this.add.container();

        // create monitor
        this.homescreen = this.add.sprite(monitorBorderX, monitorBorderY, 'homescreen').setOrigin(0, 0);
        this.monitor_border = this.add.sprite(0, 0, 'monitor_border').setOrigin(0, 0);

        // monitor icons
        this.myPC = new clickable(this, monitorBorderX + 10, monitorBorderY + 20, 'my_pc', "icon").setOrigin(0, 0);
        this.inbox = new clickable(this, monitorBorderX + 15, monitorBorderY * 2 + 40, 'inbox', "icon").setOrigin(0, 0);
        this.ie = new clickable(this, monitorBorderX + 15, monitorBorderY * 4 + 20, 'ie', "icon").setOrigin(0, 0);
        this.rb = new clickable(this, monitorBorderX + 15, monitorBorderY * 6 + 20, 'recycle_bin', "icon").setOrigin(0, 0);

        this.computer.add([this.monitor_border, this.homescreen, this.ie, this.rb, this.inbox, this.myPC]);


        //////////////////////////////
        //       ANIMS SETUP        //
        //////////////////////////////



        //////////////////////////////
        //       INBOX SETUP        //
        //////////////////////////////

        // text style
        let textStyle = { fontFamily: 'VT323', fontSize: '11px', color: 0xffffff, resolution: 2 };

        // Container to house all assets for inbox window
        this.inboxCon = this.add.container();
        this.inboxCon.setX(2000); // sets assets offscreen

        let i = Math.floor(Math.random() * (this.emailFSD.length));
        if (pathInput || pathInput == 0) {
            // i is picked using a debug key
            i = pathInput;
        }

        // email config
        let UserEmail = "theuser@hotmail.com"
        let Sender = this.emailFSD[i]["Sender"];
        let Subject = this.emailFSD[i]["Subject"];
        let RecDate = "12/18/2000";
        let SentDate = this.emailFSD[i]["Sent"];
        let Text = this.emailFSD[i]["Text"];
        let Link1 = this.emailFSD[i]["Link1"]
        let Link1PosX = this.emailFSD[i]["Link1PosX"];
        let Link1PosY = this.emailFSD[i]["Link1PosY"];

        // assets
        this.inboxWindow = this.add.sprite(75, 100, 'inbox_window').setOrigin(0, 0).setScale(1.2).setInteractive();
        this.email = new clickable(this, 220, 161, 'email').setOrigin(0, 0).setScale(1.2);
        this.emailFrom1 = new links(this, 290, 163, Sender, textStyle).setOrigin(0, 0);
        this.emailSub1 = new links(this, 395, 163, Subject, textStyle).setOrigin(0, 0);
        this.emailDate1 = new links(this, 495, 163, RecDate, textStyle).setOrigin(0, 0);

        this.inboxClose = new clickable(this, 542, 112, 'close_button').setScale(.9);

        this.inboxCon.add([this.inboxWindow, this.email, this.emailFrom1, this.emailSub1, this.emailDate1, this.inboxClose]);


        //////////////////////////////
        //    EMAIL WINDOW SETUP    //
        //////////////////////////////

        this.emailCon = this.add.container();
        this.emailCon.setX(2000);

        this.emailWindow = this.add.sprite(75, 100, 'email_window').setOrigin(0, 0).setInteractive();
        this.emailFrom2 = this.add.text(105, 121, Sender, textStyle).setOrigin(0, 0);
        this.emailSub2 = this.add.text(150, 220, Subject, textStyle).setOrigin(0, 0);
        this.emailSent = this.add.text(105, 141, SentDate, textStyle).setOrigin(0, 0);
        this.emailTo = this.add.text(105, 165, UserEmail, textStyle).setOrigin(0, 0);
        this.emailContents = this.add.text(85, 245, Text, textStyle).setOrigin(0, 0);
        this.emailLink1 = new links(this, Link1PosX, Link1PosY, Link1, textStyle).setOrigin(0, 0).setColor("blue");

        this.emailClose = new clickable(this, 485, 105, 'close_button').setScale(.7);

        this.emailCon.add([this.emailWindow, this.emailFrom2, this.emailSub2, this.emailSent, this.emailTo, this.emailClose]);
        this.emailCon.add([this.emailContents, this.emailLink1]);

        //////////////////////////////
        //    RECYCLE BIN SETUP     //
        //////////////////////////////

        this.rbCon = this.add.container();
        this.rbCon.setX(2000); // sets asset offscreen

        this.rbWindow = this.add.sprite(75, 100, 'rb_window').setOrigin(0, 0).setInteractive();
        this.rbClose = new clickable(this, 340, 119, 'close_button');

        this.rbCon.add([this.rbWindow, this.rbClose]);


        //////////////////////////////
        //    MY COMPUTER SETUP     //
        //////////////////////////////

        this.myPCCon = this.add.container();
        this.myPCCon.setX(2000); // sets asset offscreen

        this.myPCWindow = this.add.sprite(75, 100, 'mypc_window').setOrigin(0, 0).setInteractive();
        this.myPCClose = new clickable(this, 388, 107, 'close_button').setScale(.8);

        this.myPCCon.add([this.myPCWindow, this.myPCClose]);


        //////////////////////////////
        //  INTERNET EXPLORER SETUP //
        //////////////////////////////

        this.ieCon = this.add.container();
        this.ieCon.setPosition(2000, 0);

        this.ieWindow = this.add.sprite(75, 100, 'ie_window').setOrigin(0, 0).setInteractive();
        this.fourohfour = this.add.sprite(85, 150, '404').setOrigin(0, 0).setScale(.5);
        this.ieClose = new clickable(this, 630, 104, 'close_button').setScale(.8);

        this.ieCon.add([this.ieWindow, this.fourohfour, this.ieClose]);


        //////////////////////////////
        //   WEBPAGE CONTAINERS     //
        //////////////////////////////

        // preload pathing containers

        // path 1
        this.path1_1 = this.add.container();
        this.path1_2 = this.add.container();
        this.path1_3 = this.add.container();

        this.path1_1.setPosition(2000, 0);
        this.path1_2.setPosition(2000, 0);
        this.path1_3.setPosition(2000, 0);

        // path 2
        this.path2_1 = this.add.container();
        this.path2_2 = this.add.container();
        this.path2_3 = this.add.container();

        this.path2_1.setPosition(2000, 0);
        this.path2_2.setPosition(2000, 0);
        this.path2_3.setPosition(2000, 0);

        // path 3
        this.path3_1 = this.add.container();
        this.path3_2 = this.add.container();
        this.path3_3 = this.add.container();

        this.path3_1.setPosition(2000, 0);
        this.path3_2.setPosition(2000, 0);
        this.path3_3.setPosition(2000, 0);


        // setting up each container

        // path1_1
        this.webpageUI1_1 = this.add.sprite(70, 100, 'ie_window').setOrigin(0, 0).setInteractive();
        this.webpage1_1 = this.add.sprite(77, 144, 'webpage1_1').setOrigin(0, 0);
        this.link1_1 = new clickable(this, 202, 460, 'link1_1');
        this.web1_1close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.url1_1 = this.add.text(152, 127, "https://www.hole.com", textStyle).setOrigin(0, 0);
        this.path1_1.add([this.webpageUI1_1, this.webpage1_1, this.link1_1, this.web1_1close, this.url1_1]);

        this.link1_1.on('pointerover', function() {
            scene.link1_1.setTint(0x0000ff);
        })
        this.link1_1.on('pointerout', function() {
            scene.link1_1.clearTint();
        })

        // path1_2
        this.webpageUI1_2 = this.add.sprite(70, 100, 'ie_window').setOrigin(0, 0).setInteractive();
        this.webpage1_2 = this.add.sprite(77, 144, 'webpage1_2').setOrigin(0, 0);
        this.link1_2 = new clickable(this, 295, 402, 'link1_2');
        this.web1_2close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.url1_2 = this.add.text(152, 127, "http://www.ash-blog-attack.com/post-256414", textStyle).setOrigin(0, 0);
        this.path1_2.add([this.webpageUI1_2, this.webpage1_2, this.link1_2, this.web1_2close, this.url1_2]);

        this.link1_2.on('pointerover', function() {
            scene.link1_2.setTint(0x0000ff);
        })
        this.link1_2.on('pointerout', function() {
            scene.link1_2.clearTint();
        })


        // path1_3
        this.webpageUI1_3 = this.add.sprite(70, 100, 'ie_window').setOrigin(0, 0).setInteractive();
        this.webpage1_3_1 = this.add.sprite(77, 144, 'webpage1_3.1').setOrigin(0, 0);
        this.webpage1_3_2 = this.add.sprite(77, 144, 'webpage1_3.2').setOrigin(0, 0);
        this.link1_3 = new clickable(this, 80, 320, 'link1_3').setOrigin(0, 0);
        this.web1_3close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.scrollbar_bottom = this.add.sprite(613, 144, 'scrollbar_bottom').setOrigin(0, 0);
        this.scrollbar_top = this.add.sprite(613, 144, 'scrollbar_top').setOrigin(0, 0);
        this.url1_3 = this.add.text(152, 127, "http://www.aliens-heaven.org", textStyle).setOrigin(0, 0);
        this.path1_3.add([this.webpageUI1_3, this.webpage1_3_2, this.link1_3, this.webpage1_3_1, this.web1_3close, this.scrollbar_bottom,  this.scrollbar_top, this.url1_3]);

        scene.input.on('wheel', function(pointer, gameObjects, deltaX, deltaY, deltaZ) {
            if (deltaY > 0) {
                scene.path1_3.bringToTop(scene.webpage1_3_2);
                scene.path1_3.bringToTop(scene.link1_3);
                scene.path1_3.bringToTop(scene.scrollbar_bottom);
                scene.sound.play("mouse_scroll");
            } else if (deltaY < 0) {
                scene.path1_3.bringToTop(scene.webpage1_3_1);
                scene.path1_3.bringToTop(scene.scrollbar_top);
                scene.sound.play("mouse_scroll");
            }
        });

        // LINK1_1 SETUP
        scene.link1_1.on('pointerdown', function() {
            scene.curr = scene.path1_2;
            scene.path1_2.setPosition(scene.path1_1.x, scene.path1_1.y);
            scene.computer.add(scene.path1_2);

            scene.computer.remove(scene.path1_1);
            scene.path1_1.setPosition(2000, 0);

            scene.boom.stop();
        });

        // LINK1_2 SETUP
        scene.link1_2.on('pointerdown', function() {
            scene.curr = scene.path1_3;
            scene.path1_3.setPosition(scene.path1_2.x, scene.path1_2.y);
            scene.computer.add(scene.path1_3);

            // light_effect anim tied to zoomed in camera 
            let light_effect2 = scene.add.sprite(0, 0, 'light_effect').setOrigin(0, 0);
            light_effect2.anims.play('light_effect');
            light_effect2.on('animationcomplete', () => { // callback after anim completes
                light_effect2.anims.play('light_effect');
                light_effect2.destroy();
            });

            // light_effect anim tied to zoomed out camera 
            light_effect.setAlpha(1);
            light_effect.anims.play('light_effect');
            light_effect.on('animationcomplete', () => { // callback after anim completes
                light_effect.anims.play('light_effect');
                light_effect.destroy();
            });


            scene.sound.play('ufo');

            scene.computer.remove(scene.path1_2);
            scene.path1_2.setPosition(2000, 0);

            textStyle = { backgroundColor: "white", fontFamily: 'VT323', fontSize: '28px', color: "black", resolution: 2 };
            scene.scrollInstruct = scene.add.text(game.config.width / 2, game.config.height - monitorBorderY - 50, "Use the mouse wheel to scroll the page", textStyle).setOrigin(0.5, 0.5);
            scene.computer.add(scene.scrollInstruct);

            scene.input.on('wheel', function(pointer, gameObjects, deltaX, deltaY, deltaZ) {
                if (deltaY > 0) {
                    scene.scrollInstruct.destroy();
                }
            }); 
        });

        // LINK1_3 SETUP
        scene.link1_3.on('pointerdown', function() {
            scene.game.sound.stopAll();

            scene.scene.stop();
            scene.scene.launch("endScene", { ending: "PATH 1" });
        });


        // path2_1
        this.webpageUI2_1 = this.add.sprite(70, 100, 'ie_window').setOrigin(0, 0).setInteractive();
        this.webpage2_1 = this.add.sprite(77, 144, 'webpage2_1').setOrigin(0, 0);
        this.link2_1 = new clickable(this, 157, 450, 'link2_1').setAlpha(0);
        this.web2_1close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.url2_1 = this.add.text(152, 127, "http://www.the-laundry-room.com/sammy39/", textStyle).setOrigin(0, 0);
        this.path2_1.add([this.webpageUI2_1, this.webpage2_1, this.link2_1, this.web2_1close, this.url2_1]);


        // path2_2
        this.webpageUI2_2 = this.add.sprite(70, 100, 'ie_window').setOrigin(0, 0).setInteractive();
        this.webpage2_2 = this.add.sprite(77, 144, 'webpage2_2').setOrigin(0, 0);
        this.link2_2 = new clickable(this, 210, 475, 'link2_2');
        this.web2_2close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.url2_2 = this.add.text(152, 127, "https://www.lPovRIA.org/a-beautiful-song/", textStyle).setOrigin(0, 0);
        this.path2_2.add([this.webpageUI2_2, this.webpage2_2, this.link2_2, this.web2_2close, this.url2_2]);

        this.link2_2.on('pointerover', function() {
            scene.link2_2.setTint(0x0000ff);
        });

        this.link2_2.on('pointerout', function() {
            scene.link2_2.clearTint();
        });


        // path2_3
        this.webpageUI2_3 = this.add.sprite(70, 100, 'ie_window').setOrigin(0, 0).setInteractive();
        this.webpage2_3 = this.add.sprite(77, 144, 'webpage2_3').setOrigin(0, 0);
        this.link2_3 = new clickable(this, 535, 397, 'link2_3');
        this.web2_3close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.eye1 = new clickable(this, 460, 444, 'eye').setAlpha(0).setOrigin(0, 0);
        this.eye2 = this.add.sprite(360, 282, 'eye').setAlpha(0).setOrigin(0, 0);
        this.url2_3 = this.add.text(152, 127, "http://www.aoi.com/x_rUra_aSha_x/", 
        textStyle).setOrigin(0, 0);
        this.path2_3.add([this.webpageUI2_3, this.webpage2_3, this.link2_3, this.web2_3close, this.eye1, this.eye2, this.url2_3]);

        scene.eye1.on('pointerdown', function() {
            if (scene.eye2.alpha != 1) {
                scene.eye2.setAlpha(1);
                eye_tween.stop();
                scene.sound.play('squeak');
            }
        });

        let eye_tween = this.add.tween({
            targets: [this.eye1],
            easeIn: 'Linear',
            alpha: '+=1',
            repeat: -1,
            yoyo: true
        });

        // eye animation 
        this.anims.create({
            key: 'eyes',
            frames: this.anims.generateFrameNames('eye_anims', {prefix: 'Layer', end: 11, zeroPad: 0}),
            frameRate: 4
        });
        

        // LINK2_1 SETUP
        scene.link2_1.on('pointerdown', function() {
            scene.curr = scene.path2_2;
            scene.path2_2.setPosition(scene.path2_1.x, scene.path2_1.y);
            scene.computer.add([scene.path2_2]);
            scene.computer.remove(scene.path2_1);
            scene.path2_1.setPosition(2000, 0);
            scene.sound.play('breathing');
        });

        // LINK2_2 SETUP
        scene.link2_2.on('pointerdown', function() {
            scene.curr = scene.path2_3;
            scene.path2_3.setPosition(scene.path2_2.x, scene.path2_2.y);
            scene.computer.add([scene.path2_3]);
            scene.computer.remove(scene.path2_2);
            scene.path2_2.setPosition(2000, 0);
            eye_tween.play();

            let eyes = scene.add.sprite(25, 75, 'eye_anims').setOrigin(0,0).setScale(0.5);
            scene.path2_3.add(eyes);
            eyes.anims.play('eyes');
            eyes.on('animationcomplete', () => { 
                eyes.play('eyes');
                eyes.destroy();
            });
        });

        // LINK2_3 SETUP
        scene.link2_3.on('pointerdown', function() {
            scene.game.sound.stopAll();
            scene.scene.stop();
            scene.scene.launch("endScene", { ending: "PATH 2" });
        });


        // path3_1
        this.webpageUI3_1 = this.add.sprite(70, 100, 'ie_window').setOrigin(0, 0).setInteractive();
        this.webpage3_1 = this.add.sprite(77, 144, 'webpage3_1').setOrigin(0, 0);
        this.link3_1 = new clickable(this, 500, 350, 'link3_1');
        this.play1 = new clickable(this, 140, 293, 'play_button');
        this.play2 = new clickable(this, 140, 374, 'play_button');
        this.play3 = new clickable(this, 140, 456, 'play_button');
        this.isPlaying1 = false;
        this.isPlaying2 = false;
        this.isPlaying3 = false;
        this.isPaused1 = false;
        this.isPaused2 = false;
        this.isPaused3 = false;
        this.web3_1close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.url3_1 = this.add.text(152, 127, "https://www.audio-city.com/user-ratpoison/", textStyle).setOrigin(0, 0);
        this.path3_1.add([this.webpageUI3_1, this.webpage3_1, this.link3_1, this.play1, this.play2, this.play3, this.web3_1close, this.url3_1]);

        // play button 1
        this.play1.on('pointerdown', function() {
            if (!scene.isPlaying1) {
                // stops other music 
                if (scene.isPlaying2 || scene.isPaused2) {
                    scene.web_mus2.stop();
                    scene.isPaused2 = false;
                    scene.isPlaying2 = false;
                }
                if (scene.isPlaying3 || scene.isPaused3) {
                    scene.web_mus3.stop();
                    scene.isPaused3 = false;
                    scene.isPlaying3 = false;
                }
                scene.bg_path3[j].pause();
                // resumes from pause 
                if (scene.isPaused1) {
                    scene.web_mus1.resume();
                    scene.isPaused1 = false;
                } else {
                    // plays 
                    scene.web_mus1.play();
                }
                scene.isPlaying1 = true;
            } else {
                // pauses 
                scene.bg_path3[j].resume();
                scene.web_mus1.pause();
                scene.isPaused1 = true;
                scene.isPlaying1 = false;
            }
        });

        scene.play1.on('complete', function() {
            scene.isPlaying1 = false;
            scene.bg_path3[j].resume();
        });

        // play button 2
        this.play2.on('pointerdown', function() {
            if (!scene.isPlaying2) {
                // stops other music 
                if (scene.isPlaying1 || scene.isPaused1) {
                    scene.web_mus1.stop();
                    scene.isPaused1 = false;
                    scene.isPlaying1 = false;
                }
                if (scene.isPlaying3 || scene.isPaused3) {
                    scene.web_mus3.stop();
                    scene.isPaused3 = false;
                    scene.isPlaying3 = false;
                }
                scene.bg_path3[j].pause();
                // resumes from pause 
                if (scene.isPaused2) {
                    scene.web_mus2.resume();
                    scene.isPaused2 = false;
                } else {
                    // plays 
                    scene.web_mus2.play();
                }
                scene.isPlaying2 = true;
            } else {
                // pauses 
                scene.bg_path3[j].resume();
                scene.web_mus2.pause();
                scene.isPaused2 = true;
                scene.isPlaying2 = false;
            }
        });

        scene.play2.on('complete', function() {
            scene.isPlaying2 = false;
            scene.bg_path3[j].resume();
        });

        // play button 3 
        this.play3.on('pointerdown', function() {
            if (!scene.isPlaying3) {
                // stops other music 
                if (scene.isPlaying1 || scene.isPaused1) {
                    scene.web_mus1.stop();
                    scene.isPaused1 = false;
                    scene.isPlaying1 = false;
                }
                if (scene.isPlaying2 || scene.isPaused2) {
                    scene.web_mus2.stop();
                    scene.isPaused2 = false;
                    scene.isPlaying2 = false;
                }
                scene.bg_path3[j].pause();
                // resumes from pause 
                if (scene.isPaused3) {
                    scene.web_mus3.resume();
                    scene.isPaused3 = false;
                } else {
                    // plays 
                    scene.web_mus3.play();
                }
                scene.isPlaying3 = true;
            } else {
                // pauses 
                scene.bg_path3[j].resume();
                scene.web_mus3.pause();
                scene.isPaused3 = true;
                scene.isPlaying3 = false;
            }
        });

        scene.play3.on('complete', function() {
            scene.isPlaying3 = false;
            scene.bg_path3[j].resume();
        });


        // path3_2
        this.webpageUI3_2 = this.add.sprite(70, 100, 'ie_window').setOrigin(0, 0).setInteractive();
        this.webpage3_2 = this.add.sprite(77, 144, 'webpage3_2').setOrigin(0, 0);
        this.death = new clickable(this, 550, 250, 'death');
        this.tower = new clickable(this, 250, 250, 'tower');
        this.web3_2close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.clickhere = this.add.rectangle(153, 370, 100, 25, 0xffffff).setAlpha(0.01).setInteractive({ cursor: 'pointer' });
        this.dude = this.add.sprite(153, 400, 'dude').setAlpha(0).setScale(0.5).setOrigin(0, 0);
        this.url3_2 = this.add.text(152, 127, "https://www.madame-ferebi.com", textStyle).setOrigin(0, 0);
        this.path3_2.add([this.webpageUI3_2, this.webpage3_2, this.death, this.tower, this.clickhere, this.web3_2close, this.dude, this.url3_2]);

        let death_tween = this.add.tween({
            targets: [this.death],
            ease: 'Sine',
            x: '-=200',
            repeat: -1,
            yoyo: true
        });

        let tower_tween = this.add.tween({
            targets: [this.tower],
            ease: 'Sine',
            x: '+=200',
            y: '+=200',
            repeat: -1,
            yoyo: true
        });
    // TODO add tween for dude's alpha on clicking clickhere

        // path3_3
        this.webpageUI3_3 = this.add.sprite(70, 100, 'ie_window').setOrigin(0, 0).setInteractive();
        this.webpage3_3 = this.add.sprite(77, 144, 'webpage3_3').setOrigin(0, 0);
        this.link3_3 = new clickable(this, 554, 463, 'link3_3');
        this.web3_3close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.url3_3 = this.add.text(152, 127, "http://www.the-pantaloon-inquirer.net/feb_28_2002-AnHinY2/", textStyle).setOrigin(0, 0);
        this.path3_3.add([this.webpageUI3_3, this.webpage3_3, this.link3_3, this.web3_3close, this.url3_3]);

        //path3_3 animation config
        this.anims.create({
            key: 'glitch',
            frames: this.anims.generateFrameNumbers('glitch_effect', { start: 0, end: 4, first: 0 }),
            frameRate: 4
        });

        this.anims.create({
            key: 'glitch2',
            frames: this.anims.generateFrameNumbers('glitch_effect2', { start: 0, end: 5, first: 0 }),
            frameRate: 4
        });

        

        // LINK3_1 SETUP
        scene.link3_1.on('pointerdown', function() {
            // resets audio upon clicking link to exit 3_1 
            if (scene.isPlaying1) {
                scene.web_mus1.stop();
                scene.isPaused1 = false;
                scene.isPlaying1 = false;
                scene.bg_path3[j].resume();
            }
            if (scene.isPlaying2) {
                scene.web_mus2.stop();
                scene.isPaused2 = false;
                scene.isPlaying2 = false;
                scene.bg_path3[j].resume();
            }
            if (scene.isPlaying3) {
                scene.web_mus3.stop();
                scene.isPaused3 = false;
                scene.isPlaying3 = false;
                scene.bg_path3[j].resume();
            }

            scene.curr = scene.path3_2;
            death_tween.play();
            tower_tween.play();
            scene.path3_2.setPosition(scene.path3_1.x, scene.path3_1.y);
            scene.computer.add([scene.path3_2]);
            scene.computer.remove(scene.path3_1);
            scene.path3_1.setPosition(2000, 0);
        });

        function popupMaster() {
            let signal_ = scene.web3_3signal;
            if (signal_ == true) {
                scene.time.delayedCall(2500, () => {
                    scene.createPopup();
                    popupMaster();
                });
            }

        }

        // LINK3_2 SETUP
        scene.tower.on('pointerdown', function() {
            scene.curr = scene.path3_3;
            scene.path3_3.setPosition(scene.path3_2.x, scene.path3_2.y);
            scene.computer.add([scene.path3_3]);
            scene.computer.remove(scene.path3_2);
            scene.path3_2.setPosition(2000, 0);

            //link 3_2 setup acts like a constructor for page3_3
            //popus are initiated here after loading path3_3 container
            scene.web3_3signal = true;
            popupMaster();

            // plays glitch_effect when opening page 
            // TODO fix x and y based on window position
            let glitch = scene.add.sprite(scene.webpage3_3.x, scene.webpage3_3.y, 'glitch_effect').setOrigin(0, 0);
            scene.path3_3.add(glitch);
            glitch.anims.play('glitch');
            glitch.on('animationcomplete', () => { // callback after anim completes
                glitch.anims.play('glitch');
                glitch.destroy();
            });

            // plays glitch_effect_2 when opening page 
            // TODO change when animation plays 
            let glitch2 = scene.add.sprite(monitorBorderX, monitorBorderY, 'glitch_effect2').setOrigin(0, 0);
            scene.computer.add(glitch2);
            glitch2.anims.play('glitch2');
            glitch2.on('animationcomplete', () => { // callback after anim completes
                glitch2.anims.play('glitch2');
                glitch2.destroy();
            });
        });

        // LINK3_3 SETUP
        scene.link3_3.on('pointerdown', function() {
            scene.game.sound.stopAll();
            scene.scene.stop();
            scene.scene.launch("endScene", { ending: "PATH 3" });
        });

        //////////////////////////////
        //      EVENT SETUP         //
        //////////////////////////////

        // DUMMY EVENTS

        // recycling bin setup
        this.rb.on('pointerdown', function() {
            scene.rbCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.rbCon]);
            scene.computer.bringToTop(scene.rbCon);
        });

        // sets up recycling bin close button
        this.rbClose.on('pointerdown', function() {
            scene.rbCon.setPosition(2000, 0);
            scene.computer.remove([scene.rbCon]);
        });

        // my_pc setup
        this.myPC.on('pointerdown', function() {
            scene.myPCCon.setRandomPosition(30, -50, 325, 150);
            scene.computer.add([scene.myPCCon]);
            scene.computer.bringToTop(scene.myPCCon);
        })

        // sets up my pc close button
        this.myPCClose.on('pointerdown', function() {
            scene.myPCCon.setPosition(2000, 0);
            scene.computer.remove([scene.myPCCon]);
        })

        // MAIN EVENTS

        // inbox setup
        this.inbox.on('pointerdown', function() {
            scene.inboxCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.inboxCon]);
            scene.computer.bringToTop(scene.inboxCon);
        });
        // email box
        this.email.on('pointerdown', function() {
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
            scene.computer.bringToTop(scene.emailCon);
        });
        // email sender
        this.emailFrom1.on('pointerdown', function() {
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
            scene.computer.bringToTop(scene.emailCon);
        });
        // email subject
        this.emailSub1.on('pointerdown', function() {
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
            scene.computer.bringToTop(scene.emailCon);
        });
        // email received date
        this.emailDate1.on('pointerdown', function() {
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
            scene.computer.bringToTop(scene.emailCon);
        });

        // sets up inbox close button
        this.inboxClose.on('pointerdown', function() {
            scene.inboxCon.setPosition(2000, 0);
            scene.computer.remove([scene.inboxCon]);
        });

        // sets up email close button
        this.emailClose.on('pointerdown', function() {
            scene.emailCon.setPosition(2000, 0);
            scene.computer.remove([scene.emailCon]);
        });

        // sets up internet explorer
        this.ie.on('pointerdown', function() {
            if (scene.curr == null) {
                scene.ieCon.setRandomPosition(10, -50, 100, 50);
                scene.computer.add([scene.ieCon]);
                scene.computer.bringToTop(scene.ieCon);
            } else {
                scene.curr.setRandomPosition(10, -50, 100, 50);
                scene.computer.add([scene.curr]);
                scene.computer.bringToTop(scene.curr);
            }
        });

        // sets up internet explorer close button
        this.ieClose.on('pointerdown', function() {
            if (scene.curr == null) {
                scene.ieCon.setPosition(2000, 0);
                scene.computer.remove([scene.ieCon]);
            } else {
                scene.curr.setPosition(2000, 0);
                scene.computer.remove([scene.curr]);
            }
        })

        // creates a once variable
        let once = false;

        // selects a random j
        let j = this.getRandomIntInclusive(0, 3);


        // MAIN RABBIT WHOLE
        this.emailLink1.on('pointerdown', function() {
            // sets internet explorer container offscreen
            scene.ieCon.setPosition(2000, 0);
            scene.computer.bringToTop(scene.curr);

            // path 1
            if (i == 0) {

                // if first time
                if (!once) {
                    // play bg_path1 and loops continuously
                    scene.bg_path1[j].play();

                    // checks when one song is complete
                    scene.bg_path1.forEach(element => {
                        element.on('complete', function() {
                            console.log(j);
                            j = scene.getRandomIntInclusive(0, 3);
                            scene.bg_path1[j].play();
                        })
                    });

                    once = true;
                }

                // DESTROY OTHER ASSETS FOR CLEANINESS
                scene.path2_1.destroy();
                scene.path2_2.destroy();
                scene.path2_3.destroy();

                scene.path3_1.destroy();
                scene.path3_2.destroy();
                scene.path3_3.destroy();

                if (scene.computer.exists(scene.path1_2)) {
                    scene.computer.remove(scene.path1_2);
                    scene.path1_2.setPosition(2000, 0);
                }

                if (scene.computer.exists(scene.path1_3)) {
                    scene.computer.remove(scene.path1_3);
                    scene.path1_3.setPosition(2000, 0);
                }

                // INITIAL WEBPAGE
                scene.curr = scene.path1_1;
                scene.path1_1.setRandomPosition(10, -50, 100, 50);
                scene.computer.add(scene.path1_1);
            }

            // path 2
            else if (i == 1) {

                // if first time
                if (!once) {
                    // play bg_path2 and loops continously
                    scene.bg_path2[j].play();

                    // checks when one song is complete
                    scene.bg_path2.forEach(element => {
                        element.on('complete', function() {
                            console.log(j);
                            j = scene.getRandomIntInclusive(0, 3);
                            scene.bg_path2[j].play();
                        })
                    });

                    once = true;
                }

                // DESTROY OTHER ASSETS FOR CLEANINESS
                scene.path1_1.destroy();
                scene.path1_2.destroy();
                scene.path1_3.destroy();

                scene.path3_1.destroy();
                scene.path3_2.destroy();
                scene.path3_3.destroy();

                // INITIAL WEBPAGE
                scene.curr = scene.path2_1;
                scene.path2_1.setRandomPosition(10, -50, 100, 50);
                scene.computer.add([scene.path2_1]);

                // after 20 seconds, show the link to next page
                // TODO change to flashing loop 
                scene.time.delayedCall(1, () => {
                    scene.link2_1.setAlpha(1);
                });
            }

            // path 3
            else if (i == 2) {

                // if first time
                if (!once) {
                    // play bg_path3 and loops continously
                    scene.bg_path3[j].play();

                    // checks when one song is complete
                    scene.bg_path3.forEach(element => {
                        element.on('complete', function() {
                            console.log(j);
                            j = scene.getRandomIntInclusive(0, 3);
                            scene.bg_path3[j].play();
                        })
                    });

                    once = true;
                }

                // DESTROY OTHER ASSETS FOR CLEANINESS
                scene.path1_1.destroy();
                scene.path1_2.destroy();
                scene.path1_3.destroy();

                scene.path2_1.destroy();
                scene.path2_2.destroy();
                scene.path2_3.destroy();

                // INITIAL WEBPAGE
                scene.curr = scene.path3_1;
                scene.path3_1.setRandomPosition(10, -50, 100, 50);
                scene.computer.add([scene.path3_1]);
            }
        })


        //////////////////////////////
        //    WINDOW INTERACTIONS   //
        //////////////////////////////

        // ALLOWS MAIN WINDOWS TO BE BROUGHT TO TOP WHEN CLICKED ON

        this.inboxWindow.on('pointerdown', function() {
            scene.computer.bringToTop(scene.inboxCon);
        });

        this.emailWindow.on('pointerdown', function() {
            scene.computer.bringToTop(scene.emailCon);
        });

        this.rbWindow.on('pointerdown', function() {
            scene.computer.bringToTop(scene.rbCon);
        });

        this.myPCWindow.on('pointerdown', function() {
            scene.computer.bringToTop(scene.myPCCon);
        });

        this.ieWindow.on('pointerdown', function() {
            scene.computer.bringToTop(scene.ieCon);
        })


        // ALLOWS PATH WINDOWS TO BE BROUGHT TO TOP WHEN CLICKED ON

        this.webpageUI1_1.on('pointerdown', function() {
            scene.computer.bringToTop(scene.path1_1);
        });

        this.webpageUI1_2.on('pointerdown', function() {
            scene.computer.bringToTop(scene.path1_2);
        });

        this.webpageUI1_3.on('pointerdown', function() {
            scene.computer.bringToTop(scene.path1_3);
        });

        this.webpageUI2_1.on('pointerdown', function() {
            scene.computer.bringToTop(scene.path2_1);
        });

        this.webpageUI2_2.on('pointerdown', function() {
            scene.computer.bringToTop(scene.path2_2);
        });

        this.webpageUI2_3.on('pointerdown', function() {
            scene.computer.bringToTop(scene.path2_3);
        });

        this.webpageUI3_1.on('pointerdown', function() {
            scene.computer.bringToTop(scene.path3_1);
        });

        this.webpageUI3_2.on('pointerdown', function() {
            scene.computer.bringToTop(scene.path3_2);
        });

        this.webpageUI3_3.on('pointerdown', function() {
            scene.computer.bringToTop(scene.path3_3);
        });

        // ALLOWS WEBPAGES TO BE CLOSED

        this.web1_1close.on('pointerdown', function() {
            scene.path1_1.setPosition(2000, 0);
            scene.computer.remove(scene.path1_1);
        });


        this.web1_2close.on('pointerdown', function() {
            scene.path1_2.setPosition(2000, 0);
            scene.computer.remove(scene.path1_2);
        });

        this.web1_3close.on('pointerdown', function() {
            scene.path1_3.setPosition(2000, 0);
            scene.computer.remove(scene.path1_3);
        });

        this.web2_1close.on('pointerdown', function() {
            scene.path2_1.setPosition(2000, 0);
            scene.computer.remove(scene.path2_1);
        });

        this.web2_2close.on('pointerdown', function() {
            scene.path2_2.setPosition(2000, 0);
            scene.computer.remove(scene.path2_2);
        });

        this.web2_3close.on('pointerdown', function() {
            scene.path2_3.setPosition(2000, 0);
            scene.computer.remove(scene.path2_3);
        });

        this.web3_1close.on('pointerdown', function() {
            scene.path3_1.setPosition(2000, 0);
            scene.computer.remove(scene.path3_1);
        });

        this.web3_2close.on('pointerdown', function() {
            scene.path3_2.setPosition(2000, 0);
            scene.computer.remove(scene.path3_2);
        });

        this.web3_3close.on('pointerdown', function() {
            scene.path3_3.setPosition(2000, 0);
            scene.computer.remove(scene.path3_3);
            scene.web3_3signal = false;
        });


        //////////////////////////////
        //      SPOOKY SETUP        //
        //////////////////////////////

        let knockOnce = false;

        // knocking twice after opening up the first email links
        this.emailLink1.on('pointerdown', function() {

            if (!knockOnce) {
                knockOnce = true;

                if (i == 0) {
                    scene.boom.play();
                }

                // after 3 seconds of clicking on the email link for any path
                scene.time.delayedCall(3000, () => {

                    // play knocking
                    if (i == 0) {
                        scene.knocking.play();
                    }
                    else if (i == 1) {
                        scene.slam_desk.play();
                    }
                    else if (i == 2) {
                        scene.drop_spoon.play();
                    }
                    textStyle = { backgroundColor: "white", fontFamily: 'VT323', fontSize: '28px', color: "black", resolution: 2 };
                    scene.instructions = scene.add.text(game.config.width / 2, game.config.height - monitorBorderY - 23, "Press and Hold Space while Moving the Mouse to Pan the Camera", textStyle).setOrigin(0.5, 0.5);

                    // declare doneonce to false
                    let doneonce = false;

                    // destroy instructions on space press
                    scene.spaceKey.on('down', function() {
                        scene.instructions.destroy();
                    });

                    // when space key is lifted
                    scene.spaceKey.on('up', function() {

                        // only do this once
                        if (!doneonce) {
                            // set doneonce to true
                            doneonce = true;

                            //after 10 seconds delay
                            scene.time.delayedCall(10000, () => {

                                // play knocking a second time
                                scene.angel.setPosition(730, 150);
                                scene.scratching.setLoop(true);
                                scene.scratching.play();

                                scene.time.delayedCall(5000, () => {
                                    scene.angel.setPosition(2000, 0);
                                    scene.scratching.stop();
                                    scene.scratching.setLoop(false);
                                });
                            });

                        }

                    });

                });

            }

        });

        // when tarot death card is clicked
        scene.death.on('pointerdown', function() {
            scene.sound.play('scary');
            scene.computer.remove(scene.path3_2);
            scene.path3_2.setPosition(2000, 0);
            scene.webpage3_2.setTint(0xff0000);
        });

        // when red "CLICK HERE" is clicked
        this.clickhere.on('pointerdown', function() {
            scene.sound.play('click');
            scene.sound.play('crackle');

            scene.room.setTint(0x110000);

            scene.dude.setAlpha(1);
        })

    }

    //  pop-up handling
    createPopup() {
        let scene = this;
        let path = scene.path3_3;
        let rightEdge = 624;
        let bottomEdge = 511;
        let popups = ['popup-advert_1', 'popup-advert_2', 'popup-advert_3'];
        let index = scene.getRandomIntInclusive(0, 2);
        let key = popups[index];
        let popup = this.add.sprite(0, 0, key).setAlpha(1).setScale(1).setOrigin(0, 0);

        let left = 77,
            right = rightEdge - popup.displayWidth,
            bottom = bottomEdge - popup.displayHeight,
            top = 144;

        let x = scene.getRandomIntInclusive(left, right);
        let y = scene.getRandomIntInclusive(bottom, top);

        popup.setPosition(x, y);

        popup.setInteractive({ cursor: 'pointer' });
        path.add(popup);

        scene.sound.play('popup');

        popup.on('pointerdown', function() {
            scene.sound.play('click');
            popup.destroy();
        });
    }


    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    update() {
        if (this.spaceKey.isDown) { // able to look around the room when pressing space
            this.cameras.main.setBounds(-game.config.width / 5, // x: -160
                -game.config.height / 20, // y: -30
                game.config.width * 1.5, // width: 1200 (therefore, can scroll right until 1040 pixels)
                game.config.height * 1.1 + 20); // height: 680 (therefore, can scroll down until 650 pixels)

            this.computer.setY(180);
            this.computer.setX(-150);
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

            this.computer.setY(0);
            this.computer.setX(0);
            this.computer.setScale(1);
        }
    }
}