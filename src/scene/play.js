class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        let scene = this;
        this.curr = null;

        this.emailFSD = this.cache.json.get('emailHeader')

        //////////////////////////////
        //   INITIAL SCENE SETUP    //
        //////////////////////////////


        // background music set up

        this.time.delayedCall(6000, () => {
            this.bg_1 = this.sound.add(
                'bg_1', 
                {
                    volume: .5,
                    loop: true,
                    rate: .2
                }
            );
            this.bg_1.play();

            this.time.delayedCall(1000, () =>{
                this.bg_1_2 = this.sound.add(
                    'bg_1',
                    {
                        volume: .5,
                        loop: true,
                        rate: .35
                    }
                );
                this.bg_1_2.play();
            });
        }, null, this);

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
        let SentDate = this.emailFSD[i]["Sent"];
        let Text = this.emailFSD[i]["Text"];
        let Link1 = this.emailFSD[i]["Link1"]
        let Link1PosX = this.emailFSD[i]["Link1PosX"];
        let Link1PosY = this.emailFSD[i]["Link1PosY"];

        // assets
        this.inboxWindow = this.add.sprite(75, 100, 'inbox_window').setOrigin(0,0).setScale(1.2).setInteractive();
        this.email = new clickable(this, 220, 161, 'email').setOrigin(0,0).setScale(1.2);
        this.emailFrom1 = new links(this, 290, 163, Sender, textStyle).setOrigin(0,0);
        this.emailSub1 = new links(this, 395, 163, Subject, textStyle).setOrigin(0,0);
        this.emailDate1 = new links(this, 495, 163, RecDate, textStyle).setOrigin(0,0);

        this.inboxClose = new clickable(this, 542, 112, 'close_button').setScale(.9);

        this.inboxCon.add([this.inboxWindow, this.email, this.emailFrom1, this.emailSub1, this.emailDate1, this.inboxClose]);


        //////////////////////////////
        //    EMAIL WINDOW SETUP    //
        //////////////////////////////

        this.emailCon = this.add.container();
        this.emailCon.setX(2000);

        this.emailWindow = this.add.sprite(75, 100, 'email_window').setOrigin(0,0).setInteractive();
        this.emailFrom2 = this.add.text(105, 121, Sender, textStyle).setOrigin(0,0);
        this.emailSub2 = this.add.text(150, 220, Subject, textStyle).setOrigin(0,0);
        this.emailSent = this.add.text(105, 141, SentDate, textStyle).setOrigin(0,0);
        this.emailTo = this.add.text(105, 165, UserEmail, textStyle).setOrigin(0,0);
        this.emailContents = this.add.text(85, 245, Text, textStyle).setOrigin(0,0);
        this.emailLink1 = new links(this, Link1PosX, Link1PosY, Link1, textStyle).setOrigin(0,0).setColor("blue");

        this.emailClose = new clickable(this, 485, 105, 'close_button').setScale(.7);

        this.emailCon.add([this.emailWindow, this.emailFrom2, this.emailSub2, this.emailSent, this.emailTo, this.emailClose]);
        this.emailCon.add([this.emailContents, this.emailLink1]);
4
        //////////////////////////////
        //    RECYCLE BIN SETUP     //
        //////////////////////////////

        this.rbCon = this.add.container();
        this.rbCon.setX(2000);                  // sets asset offscreen

        this.rbWindow = this.add.sprite(75, 100, 'rb_window').setOrigin(0,0).setInteractive();
        this.rbClose = new clickable(this, 340, 119, 'close_button');

        this.rbCon.add([this.rbWindow, this.rbClose]);


        //////////////////////////////
        //    MY COMPUTER SETUP     //
        //////////////////////////////

        this.myPCCon = this.add.container();
        this.myPCCon.setX(2000);                  // sets asset offscreen

        this.myPCWindow = this.add.sprite(75, 100, 'mypc_window').setOrigin(0, 0).setInteractive();
        this.myPCClose = new clickable(this, 388, 107, 'close_button').setScale(.8);

        this.myPCCon.add([this.myPCWindow, this.myPCClose]);


        //////////////////////////////
        //  INTERNET EXPLORER SETUP //
        //////////////////////////////

        this.ieCon = this.add.container();
        this.ieCon.setPosition(2000, 0);

        this.ieWindow = this.add.sprite(75, 100, 'ie_window').setOrigin(0,0).setInteractive();
        this.fourohfour = this.add.sprite(85, 150, '404').setOrigin(0,0).setScale(.5);
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

        // paht 3
        this.path3_1 = this.add.container();
        this.path3_2 = this.add.container();
        this.path3_3 = this.add.container();

        this.path3_1.setPosition(2000, 0);
        this.path3_2.setPosition(2000, 0);
        this.path3_3.setPosition(2000, 0);


        // setting up each container

        // path1_1
        this.webpageUI1_1 = this.add.sprite(70, 100, 'ie_window').setOrigin(0,0).setInteractive();
        this.webpage1_1 = this.add.sprite(75, 100, 'webpage').setOrigin(0,0).setScale(0.6).setTint(0xff0000);
        this.link1_1 = new clickable(this, 350, 250, 'linkex');
        this.web1_1close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.path1_1.add([this.webpageUI1_1, this.webpage1_1, this.link1_1, this.web1_1close]);

        
        // path1_2
        this.webpageUI1_2 = this.add.sprite(70, 100, 'ie_window').setOrigin(0,0).setInteractive();
        this.webpage1_2 = this.add.sprite(77, 144, 'webpage1_2').setOrigin(0,0);
        this.link1_2 = new clickable(this, 295, 402, 'link1_2');
        this.link1_2.on('pointerover', function(){
            scene.link1_2.setTint(0x0000ff);
        })
        this.link1_2.on('pointerout', function(){
            scene.link1_2.clearTint();
        })
        this.web1_2close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.path1_2.add([this.webpageUI1_2, this.webpage1_2, this.link1_2, this.web1_2close]);


        // path1_3
        this.webpageUI1_3 = this.add.sprite(70, 100, 'ie_window').setOrigin(0,0).setInteractive();
        this.webpage1_3_1 = this.add.sprite(77, 144, 'webpage1_3.1').setOrigin(0,0);
        this.webpage1_3_2 = this.add.sprite(77, 144, 'webpage1_3.2').setOrigin(0,0);
        this.link1_3 = new clickable(this, 80, 300, 'link1_3').setOrigin(0,0);
        this.web1_3close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.path1_3.add([this.webpageUI1_3, this.webpage1_3_2, this.link1_3, this.webpage1_3_1, this.web1_3close]);

        scene.input.on('wheel', function(pointer, gameObjects, deltaX, deltaY, deltaZ) {
            if(deltaY > 0){
                scene.path1_3.bringToTop(scene.webpage1_3_2);
                scene.path1_3.bringToTop(scene.link1_3);
            }
            else if(deltaY < 0){
                scene.path1_3.bringToTop(scene.webpage1_3_1);
            }
        });


        // path2_1
        this.webpageUI2_1 = this.add.sprite(70, 100, 'ie_window').setOrigin(0,0).setInteractive();
        this.webpage2_1 = this.add.sprite(75, 100, 'webpage').setOrigin(0,0).setScale(0.6);
        this.link2_1 = new clickable(this, 350, 250, 'linkex');
        this.web2_1close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.path2_1.add([this.webpageUI2_1, this.webpage2_1, this.link2_1, this.web2_1close]);


        // path2_2
        this.webpageUI2_2 = this.add.sprite(70, 100, 'ie_window').setOrigin(0,0).setInteractive();
        this.webpage2_2 = this.add.sprite(77, 144, 'webpage2_2').setOrigin(0,0);
        this.link2_2 = new clickable(this, 350, 250, 'link2_2');
        this.web2_2close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.path2_2.add([this.webpageUI2_2, this.webpage2_2, this.link2_2, this.web2_2close]);


        // path2_3
        this.webpageUI2_3 = this.add.sprite(70, 100, 'ie_window').setOrigin(0,0).setInteractive();
        this.webpage2_3 = this.add.sprite(75, 100, 'webpage').setOrigin(0,0).setScale(0.6).setTint(0xff0000);
        this.link2_3 = new clickable(this, 350, 250, 'linkex');
        this.web2_3close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.path2_3.add([this.webpageUI2_3, this.webpage2_3, this.link2_3, this.web2_3close]);


        // path3_1
        this.webpageUI3_1 = this.add.sprite(70, 100, 'ie_window').setOrigin(0,0).setInteractive();
        this.webpage3_1 = this.add.sprite(77, 144, 'webpage3_1').setOrigin(0,0);
        this.link3_1 = new clickable(this, 350, 250, 'link3_1');
        this.web3_1close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.path3_1.add([this.webpageUI3_1, this.webpage3_1, this.link3_1, this.web3_1close]);


        // path3_2
        this.webpageUI3_2 = this.add.sprite(70, 100, 'ie_window').setOrigin(0,0).setInteractive();
        this.webpage3_2 = this.add.sprite(75, 100, 'webpage').setOrigin(0,0).setScale(0.6).setTint(0x00ff00);
        this.link3_2 = new clickable(this, 350, 250, 'linkex');
        this.web3_2close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.path3_2.add([this.webpageUI3_2, this.webpage3_2, this.link3_2, this.web3_2close]);


        // path3_3
        this.webpageUI3_3 = this.add.sprite(70, 100, 'ie_window').setOrigin(0,0).setInteractive();
        this.webpage3_3 = this.add.sprite(75, 100, 'webpage').setOrigin(0,0).setScale(0.6).setTint(0x0000ff);
        this.link3_3 = new clickable(this, 350, 250, 'linkex');
        this.web3_3close = new clickable(this, 625, 104, 'close_button').setScale(.8);
        this.path3_3.add([this.webpageUI3_3, this.webpage3_3, this.link3_3, this.web3_3close]);


        //////////////////////////////
        //      EVENT SETUP         //
        //////////////////////////////

        // DUMMY EVENTS

        // recycling bin setup
        this.rb.on('pointerdown', function(){
            scene.rbCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.rbCon]);
            scene.computer.bringToTop(scene.rbCon);
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
            scene.computer.bringToTop(scene.myPCCon);
        })

        // sets up my pc close button
        this.myPCClose.on('pointerdown', function(){
            scene.myPCCon.setPosition(2000, 0);
            scene.computer.remove([scene.myPCCon]);
        })

        // MAIN EVENTS

        // inbox setup
        this.inbox.on('pointerdown', function(){
            scene.inboxCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.inboxCon]);
            scene.computer.bringToTop(scene.inboxCon);
        });
        // email box
        this.email.on('pointerdown', function(){
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
            scene.computer.bringToTop(scene.emailCon);
        });
        // email sender
        this.emailFrom1.on('pointerdown', function(){
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
            scene.computer.bringToTop(scene.emailCon);
        });
        // email subject
        this.emailSub1.on('pointerdown', function(){
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
            scene.computer.bringToTop(scene.emailCon);
        });
        // email received date
        this.emailDate1.on('pointerdown', function(){
            scene.emailCon.setRandomPosition(10, -50, 200, 50);
            scene.computer.add([scene.emailCon]);
            scene.computer.bringToTop(scene.emailCon);
        });

        // sets up inbox close button
        this.inboxClose.on('pointerdown', function(){
            scene.inboxCon.setPosition(2000, 0);
            scene.computer.remove([scene.inboxCon]);
        });

        // sets up email close button
        this.emailClose.on('pointerdown', function(){
            scene.emailCon.setPosition(2000, 0);
            scene.computer.remove([scene.emailCon]);
        });

        // sets up internet explorer
        this.ie.on('pointerdown', function(){
            if(scene.curr == null){
                scene.ieCon.setRandomPosition(10, -50, 100, 50);
                scene.computer.add([scene.ieCon]);
                scene.computer.bringToTop(scene.ieCon);
            }
            else{
                scene.curr.setRandomPosition(10, -50, 100, 50);
                scene.computer.add([scene.curr]);
                scene.computer.bringToTop(scene.curr);
            }
        });

        // sets up internet explorer close button
        this.ieClose.on('pointerdown', function(){
            if(scene.curr == null){
                scene.ieCon.setPosition(2000, 0);
                scene.computer.remove([scene.ieCon]);
            }
            else{
                scene.curr.setPosition(2000, 0);
                scene.computer.remove([scene.curr]);

            }
        })


        // MAIN RABBIT WHOLE
        this.emailLink1.on('pointerdown', function(){
            scene.ieCon.setPosition(2000, 0);

            if(i == 0){
                // DESTROY OTHER ASSETS FOR CLEANINESS
                scene.path2_1.destroy();
                scene.path2_2.destroy();
                scene.path2_3.destroy();
                
                scene.path3_1.destroy();
                scene.path3_2.destroy();
                scene.path3_3.destroy();

                // INITIAL WEBPAGE
                scene.curr = scene.path1_1;
                scene.path1_1.setRandomPosition(10, -50, 100, 50);
                scene.computer.add([scene.path1_1]);

                // LINK1_1 SETUP
                scene.link1_1.on('pointerdown', function(){
                    scene.curr = scene.path1_2;
                    scene.path1_2.setPosition(scene.path1_1.x, scene.path1_1.y);
                    scene.computer.add([scene.path1_2]);
                    scene.path1_1.destroy();
                });

                // LINK1_2 SETUP
                scene.link1_2.on('pointerdown', function(){
                    scene.curr = scene.path1_3;
                    scene.path1_3.setPosition(scene.path1_2.x, scene.path1_2.y);
                    scene.computer.add([scene.path1_3]);
                    scene.path1_2.destroy();
                });

                // LINK1_3 SETUP
                scene.link1_3.on('pointerdown', function(){
                    console.log("you beat the game yay");
                    let win = scene.add.sprite(100, 100, 'Beeg Yoshi').setOrigin(0,0).setScale(0.5);
                    scene.computer.add(win);
                });
            }

            else if(i == 1){
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

                // LINK2_1 SETUP
                scene.link2_1.on('pointerdown', function(){
                    scene.curr = scene.path2_2;
                    scene.path2_2.setPosition(scene.path2_1.x, scene.path2_1.y);
                    scene.computer.add([scene.path2_2]);
                    scene.path2_1.destroy();
                });

                // LINK1_2 SETUP
                scene.link2_2.on('pointerdown', function(){
                    scene.curr = scene.path2_3;
                    scene.path2_3.setPosition(scene.path2_2.x, scene.path2_2.y);
                    scene.computer.add([scene.path2_3]);
                    scene.path2_2.destroy();
                });

                // LINK1_3 SETUP
                scene.link2_3.on('pointerdown', function(){
                    console.log("you beat the game yay");
                    let win = scene.add.sprite(100, 100, 'Beeg Yoshi').setOrigin(0,0).setScale(0.5);
                    scene.computer.add(win)
                });
            }

            else if(i == 2){
                console.log("got into 2");
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

                // LINK1_1 SETUP
                scene.link3_1.on('pointerdown', function(){
                    scene.curr = scene.path3_2;
                    scene.path3_2.setPosition(scene.path3_1.x, scene.path3_1.y);
                    scene.computer.add([scene.path3_2]);
                    scene.path3_1.destroy();
                });

                // LINK1_2 SETUP
                scene.link3_2.on('pointerdown', function(){
                    scene.curr = scene.path3_3;
                    scene.path3_3.setPosition(scene.path3_2.x, scene.path3_2.y);
                    scene.computer.add([scene.path3_3]);
                    scene.path3_2.destroy();
                });

                // LINK1_3 SETUP
                scene.link3_3.on('pointerdown', function(){
                    console.log("you beat the game yay");
                    let win = scene.add.sprite(100, 100, 'Beeg Yoshi').setOrigin(0,0).setScale(0.5);
                    scene.computer.add(win);
                });
            }
        })


        //////////////////////////////
        //    WINDOW INTERACTIONs   //
        //////////////////////////////

        // MAIN WINDOWS

        this.inboxWindow.on('pointerdown', function(){
            scene.computer.bringToTop(scene.inboxCon);
        });

        this.emailWindow.on('pointerdown', function(){
            scene.computer.bringToTop(scene.emailCon);
        });

        this.rbWindow.on('pointerdown', function(){
            scene.computer.bringToTop(scene.rbCon);
        });

        this.myPCWindow.on('pointerdown', function(){
            scene.computer.bringToTop(scene.myPCCon);
        });

        this.ieWindow.on('pointerdown', function(){
            scene.computer.bringToTop(scene.ieCon);
        })

        
        // PATH WINDOWS

        this.webpageUI1_1.on('pointerdown', function(){
            scene.computer.bringToTop(scene.path1_1);
        });

        this.webpageUI1_2.on('pointerdown', function(){
            scene.computer.bringToTop(scene.path1_2);
        });

        this.webpageUI1_3.on('pointerdown', function(){
            scene.computer.bringToTop(scene.path1_3);
        });

        this.webpageUI2_1.on('pointerdown', function(){
            scene.computer.bringToTop(scene.path2_1);
        });

        this.webpageUI2_2.on('pointerdown', function(){
            scene.computer.bringToTop(scene.path2_2);
        });

        this.webpageUI2_3.on('pointerdown', function(){
            scene.computer.bringToTop(scene.path2_3);
        });

        this.webpageUI3_1.on('pointerdown', function(){
            scene.computer.bringToTop(scene.path3_1);
        });

        this.webpageUI3_2.on('pointerdown', function(){
            scene.computer.bringToTop(scene.path3_2);
        });

        this.webpageUI3_3.on('pointerdown', function(){
            scene.computer.bringToTop(scene.path3_3);
        });

        // setting up close feature for each webpage

        this.web1_1close.on('pointerdown', function(){
            scene.path1_1.setPosition(2000, 0);
            scene.computer.remove(scene.path1_1);
        });


        this.web1_2close.on('pointerdown', function(){
            scene.path1_2.setPosition(2000, 0);
            scene.computer.remove(scene.path1_2);
        });

        this.web1_3close.on('pointerdown', function(){
            scene.path1_3.setPosition(2000, 0);
            scene.computer.remove(scene.path1_3);
        });

        this.web2_1close.on('pointerdown', function(){
            scene.path2_1.setPosition(2000, 0);
            scene.computer.remove(scene.path2_1);
        });

        this.web2_2close.on('pointerdown', function(){
            scene.path2_2.setPosition(2000, 0);
            scene.computer.remove(scene.path2_2);
        });

        this.web2_3close.on('pointerdown', function(){
            scene.path2_3.setPosition(2000, 0);
            scene.computer.remove(scene.path2_3);
        });

        this.web3_1close.on('pointerdown', function(){
            scene.path3_1.setPosition(2000, 0);
            scene.computer.remove(scene.path3_1);
        });

        this.web3_2close.on('pointerdown', function(){
            scene.path3_2.setPosition(2000, 0);
            scene.computer.remove(scene.path3_2);
        });

        this.web3_3close.on('pointerdown', function(){
            scene.path3_3.setPosition(2000, 0);
            scene.computer.remove(scene.path3_3);
        });


        //////////////////////////////
        //      SPOOKY SETUP        //
        //////////////////////////////

        


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