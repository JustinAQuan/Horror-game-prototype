class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    create() {
        let scene = this;

        let letters = "NEVER_LEAVE";
        let Title = "NEVER_ALONE ";

        // creates menu music
        this.menu_bgm = this.sound.add(
            'menu_music', 
            {
                volume: 1,
                loop: true,
                rate: 1
            }
        );
        this.menu_bgm.play();

        // create homescreen
        this.monitor = this.add.sprite(0, 0, 'monitor_border').setOrigin(0,0);
        this.homescreen = this.add.sprite(monitorBorderX, monitorBorderY, 'homescreen').setOrigin(0,0);
        this.folder = new clickable(this, 75, 490, 'folder', "icon").setOrigin(0,0).setScale(.7);
        this.add.text(73, 530, "Instructions", {fontFamily: 'VT323', fontSize: "12px", color: 0xffffff, resolution: 2}).setOrigin(0,0);

        // title text (this can be made in combination with menu image)
        this.title = this.add.text(game.config.width / 2, game.config.height / 2 - 50, Title, {fontFamily: 'VT323', fontSize: "100px", color: 0xffffff}).setOrigin(.5,.5);

        // adds clickable login text
        this.login = this.add.sprite(game.config.width / 2, game.config.height / 1.5, 'login').setOrigin(0.5,0.5);
        this.login.setInteractive({ cursor: 'pointer' });
        this.clicked = false;

        // adds instructions window
        this.instructCon = this.add.container();
        this.instructCon.setPosition(2000, 0);

        let text = "Press and hold \"Space\" to look around the room using the mouse.\n\nUse left mouse click to interact.\n\nPress \"ESC\" to Pause the game.\n\nClose this window by clicking on the \"X\" top right."

        this.instructionsWindow = this.add.sprite(game.config.width / 2, game.config.height / 2, 'instruction_window').setOrigin(.5,.5);
        this.closeInstruct = new clickable(this, 585, 163, 'close_button');
        this.instructions = this.add.text(380, 234, text, {fontFamily: 'VT323', fontSize: "13px", color: 0xffffff, resolution: 2}).setOrigin(.5,.5);

        this.instructCon.add([this.instructionsWindow,this.closeInstruct,this.instructions]);

        // after a 5 second delay
        this.time.delayedCall(4000, function() {
            scene.time.addEvent({
                delay: 100,

                // function gets a random char from letters
                callback: function() {
                    let index = Math.floor(Math.random() * letters.length);

                    // replaces a random char from title with one from letters
                    Title = Title.replace(Title[index], letters.charAt(index));
                    scene.title.setText(Title);
                },
                loop: true,
            });
        });

        this.folder.on('pointerdown', function(){
            scene.instructCon.setPosition(0, 0);
        });

        this.closeInstruct.on('pointerdown', function(){
            scene.instructCon.setPosition(2000, 0);
        })

        // when player clicks on login
        this.login.on('pointerdown', function () {
            if(scene.clicked == false){
                scene.clicked = true;                   // sets clicked to true, so no spam
                scene.menu_bgm.stop();                  // stops menu music
                scene.sound.play('keyboard');           // starts keyboard sound effect
                scene.time.delayedCall(2000, function(){
                    scene.clicked = false;
                    scene.scene.sleep("menuScene");         // puts menuScene to sleep
                    scene.scene.launch("playScene");        // starts playScene and passes name
                });
            }
        });
    }
}