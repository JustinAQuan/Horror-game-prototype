class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        let scene = this;
        let currPage = null;

        this.emailFSD = this.cache.json.get('emailHeader')

        //////////////////////////////
        //   INITIAL SCENE SETUP    //
        //////////////////////////////

        // creates outside whenever we want
        // this.outside = this.add.tileSprite().setOrigin(0,0);

        this.sound.play('startup', {volume: 0.5});

        // creates room
        this.room = this.add.sprite(-game.config.width / 5, -game.config.height / 20, 'room').setOrigin(0, 0);


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
        //       INBOX SETUP        //
        //////////////////////////////

        // text style
        let textStyle = { fontFamily: 'VT323', fontSize: '11px', color: 0xffffff, resolution: 2};

        // Container to house all assets for inbox window
        this.inboxCon = this.add.container();
        this.inboxCon.setX(2000);               // sets assets offscreen

        // choose random i from array
        let i = Math.floor(Math.random() * (this.emailFSD.length));

        // email config
        let UserEmail = "theuser@hotmail.com"
        let Sender = this.emailFSD[i]["Sender"];
        let Subject = this.emailFSD[i]["Subject"];
        let RecDate = "12/18/2000";
        let SentDate = "January 14, 1998 5:45 PM";
        let Text = this.emailFSD[i]["Text"];

        // assets
        this.inboxWindow = this.add.sprite(75, 100, 'inbox_window').setOrigin(0,0).setScale(1.2);
        this.email = this.add.sprite(220, 161, 'email').setOrigin(0,0).setScale(1.2).setInteractive( { cursor: 'pointer' } );
        this.emailFrom1 = this.add.text(290, 163, Sender, textStyle).setOrigin(0,0).setInteractive( { cursor: 'pointer' } );
        this.emailSub1 = this.add.text(395, 163, Subject, textStyle).setOrigin(0,0).setInteractive( { cursor: 'pointer' } );
        this.emailDate1 = this.add.text(495, 163, RecDate, textStyle).setOrigin(0,0).setInteractive( { cursor: 'pointer' } );

        this.inboxClose = new clickable(this, 542, 112, 'close_button').setScale(.45);

        this.inboxCon.add([this.inboxWindow, this.email, this.emailFrom1, this.emailSub1, this.emailDate1, this.inboxClose]);


        //////////////////////////////
        //    EMAIL WINDOW SETUP    //
        //////////////////////////////

        this.emailCon = this.add.container();
        this.emailCon.setX(2000);

        this.emailWindow = this.add.sprite(75, 100, 'email_window').setOrigin(0,0);
        this.emailFrom2 = this.add.text(105, 122, Sender, textStyle).setOrigin(0,0);
        this.emailSub2 = this.add.text(150, 221, Subject, textStyle).setOrigin(0,0);
        this.emailSent = this.add.text(105, 143, SentDate, textStyle).setOrigin(0,0);
        this.emailTo = this.add.text(105, 165, UserEmail, textStyle).setOrigin(0,0);
        this.emailContents = this.add.text(85, 250, Text, textStyle).setOrigin(0,0);

        this.emailClose = this.add.rectangle(480, 107, 10, 10, 0x000000).setInteractive( { cursor: 'pointer' } );

        this.emailCon.add([this.emailWindow, this.emailFrom2, this.emailSub2, this.emailSent, this.emailTo, this.emailClose, this.emailContents]);

        //////////////////////////////
        //    RECYCLE BIN SETUP     //
        //////////////////////////////

        this.rbCon = this.add.container();
        this.rbCon.setX(2000);                  // sets asset offscreen

        this.rbWindow = this.add.sprite(75, 100, 'rb_window').setOrigin(0,0);
        this.rbClose = this.add.rectangle(345, 112, 15, 15, 0x000000).setInteractive( { cursor: 'pointer' } );

        this.rbCon.add([this.rbWindow, this.rbClose]);


        //////////////////////////////
        //    MY COMPUTER SETUP     //
        //////////////////////////////

        this.myPCCon = this.add.container();
        this.myPCCon.setX(2000);                  // sets asset offscreen

        this.myPCWindow = this.add.sprite(75, 100, 'mypc_window').setOrigin(0, 0);

        this.myPCClose = this.add.rectangle(385, 107, 10, 10, 0x000000).setInteractive( { cursor: 'pointer' } );

        this.myPCCon.add([this.myPCWindow, this.myPCClose]);


        //////////////////////////////
        //   WEBPAGE CONTAINERS     //
        //////////////////////////////

        // preload pathing containers

        // path 1
        this.path1_1 = this.add.container();
        this.path1_2 = this.add.container();
        this.path1_3 = this.add.container();

        this.path1_1.setX(2000);
        this.path1_2.setX(2000);
        this.path1_3.setX(2000);

        // path 2
        this.path2_1 = this.add.container();
        this.path2_2 = this.add.container();
        this.path2_3 = this.add.container();

        this.path2_1.setX(2000);
        this.path2_2.setX(2000);
        this.path2_3.setX(2000);

        // paht 3
        this.path3_1 = this.add.container();
        this.path3_2 = this.add.container();
        this.path3_3 = this.add.container();

        this.path3_1.setX(2000);
        this.path3_2.setX(2000);
        this.path3_3.setX(2000);


        // setting up each container

        // path1_1
        this.webpage1_1 = this.add.sprite(400, 300, 'webpage').setScale(0.7);
        this.link1_1 = new clickable(this, 350, 250, 'link1_1_1');
        this.path1_1.add([this.webpage1_1, this.link1_1]);

        // path1_2
        this.webpage1_2 = this.add.sprite(400, 300, 'webpage').setScale(0.7).setTint(0xff0000);
        this.link1_2 = new clickable(this, 350, 250, 'link1_1_1');
        this.path1_2.add([this.webpage1_2, this.link1_2]);

        // path1_3
        this.webpage1_3 = this.add.sprite(400, 300, 'webpage').setScale(0.7).setTint(0x00ff00);
        this.link1_3 = new clickable(this, 350, 250, 'link1_1_1');
        this.path1_3.add([this.webpage1_3, this.link1_3]);

        // path2_1

        // path2_2

        // path2_3

        // path3_1

        // path3_2

        // path3_3

        //////////////////////////////
        //      EVENT SETUP         //
        //////////////////////////////

        // DUMMY EVENTS

        // recycling bin setup
        this.rb.on('pointerdown', function(){
            scene.rbCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.rbCon]);
        });

        // sets up recycling bin close button
        this.rbClose.on('pointerdown', function(){
            scene.rbCon.setPosition(2000, 0);
            scene.computer.remove([scene.rbCon]);
        });

        // my_pc setup
        this.myPC.on('pointerdown', function(){
            scene.myPCCon.setRandomPosition(30, -50, 325, 150);
            scene.computer.add([scene.myPCCon]);
        })

        // sets up my pc close button
        this.myPCClose.on('pointerdown', function(){
            scene.myPCCon.setPosition(2000, 0);
            scene.computer.add([scene.myPCCon]);
        })

        // MAIN EVENTS

        // inbox setup
        this.inbox.on('pointerdown', function(){
            scene.inboxCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.inboxCon]);
        });

        // sets up inbox close button
        this.inboxClose.on('pointerdown', function(){
            scene.inboxCon.setPosition(2000, 0);
            scene.computer.remove([scene.inboxCon]);
        });

        // email template setup
        this.email.on('pointerdown', function(){
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
        });
        this.emailFrom1.on('pointerdown', function(){
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
        });
        this.emailSub1.on('pointerdown', function(){
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
        });
        this.emailDate1.on('pointerdown', function(){
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
        });



        // sets up email close button
        this.emailClose.on('pointerdown', function(){
            scene.emailCon.setPosition(2000, 0);
            scene.computer.remove([scene.emailCon]);
        });

        // LINK1_1 SETUP
        this.link1_1.on('pointerdown', function(){
            scene.path1_2.setPosition(scene.path1_1.x, scene.path1_1.y);
            scene.computer.add([scene.path1_2]);
            scene.path1_1.destroy();
        });

        // LINK1_2 SETUP
        this.link1_2.on('pointerdown', function(){
            scene.path1_3.setPosition(scene.path1_2.x, scene.path1_2.y);
            scene.computer.add([scene.path1_3]);
            scene.path1_2.destroy();
        });

        // LINK1_3 SETUP
        this.link1_3.on('pointerdown', function(){
            console.log("you beat the game yay");
            scene.add.sprite(100, 100, 'Beeg Yoshi').setOrigin(0,0).setScale(0.5);
        });


        // //prototype looking around and hearing sounds
        // this.time.delayedCall(3000, () => {
        //     // add instruction text
        //     this.instructions = this.add.text(
        //         game.config.width / 2,
        //         game.config.height - monitorBorderY * 4,
        //         "Press Space to look around the room", { fontSize: "30px", color: 0xffffff }
        //     ).setOrigin(0.5, 0);

        //     // play sound
        //     this.sound.play('weird');

        //     // add something to window
        //     this.beegyoshi = this.add.sprite(500, 0, 'test').setOrigin(0, 0);
        //     this.beegyoshi.setDepth(-1);
        // }, null, this);


        //////////////////////////////
        //      MAIN CONTROLS       //
        //////////////////////////////

        // camera follows player's mouse
        this.cameras.main.startFollow(this.input, false, 0.01, 0.01);

        // initializing spacebar as a keyboard input
        this.spaceKey = this.input.keyboard.addKey('SPACE');
        this.escape = this.input.keyboard.addKey('ESC');

        // pause game when player presses esc
        this.escape.on('down', function(){
            scene.scene.pause();
            scene.scene.launch("pause");
        });
    }

    update() {
        if (this.spaceKey.isDown) { // able to look around the room when pressing space
            this.cameras.main.setBounds(
                -game.config.width / 5, // x: -160
                -game.config.height / 20, // y: -30
                game.config.width * 1.5, // width: 1200 (therefore, can scroll right until 1040 pixels)
                game.config.height * 1.1 + 20); // height: 680 (therefore, can scroll down until 650 pixels)

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

            this.computer.setY(0);
            this.computer.setScale(1);
        }
    }
}