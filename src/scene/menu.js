class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        // preload homescreen
        this.load.image('homescreen', './assets/Desktop_bg.png');
        this.load.image('monitor', './assets/Monitor.png');

        // load music
        this.load.audio('menu_music', './assets/testmenu.wav');

        // load form
        this.load.html("form", "form.html");
    }

    create() {
        let scene = this;

        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*#%&!";
        let Title = "Horror Game";

        // creates menu music
        this.menu_bgm = this.sound.add(
            'menu_music', 
            {
                volume: 1,
                loop: true,
                rate: 0.65
            }
        );
        this.menu_bgm.play();

        // create homescreen
        this.monitor = this.add.sprite(0, 0, 'monitor').setOrigin(0,0);
        this.homescreen = this.add.sprite(monitorBorderX, monitorBorderY, 'homescreen').setOrigin(0,0);

        // title text (this can be made in combination with menu image)
        this.title = this.add.text(game.config.width/2, game.config.height/2, Title, {fontSize: "50px", color: 0xffffff}).setOrigin(.5,.5);

        // sets enter key as a valid key
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        // after a 5 second delay
        this.time.delayedCall(5000, function() {
            scene.time.addEvent({
                delay: 750,

                // function gets a random char from letters
                callback: function() {
                    let index = Math.floor(Math.random() * letters.length);
                    let i = Math.floor(Math.random() * Title.length);

                    // replaces a random char from title with one from letters
                    Title = Title.replace(Title[i], letters.charAt(index));
                    scene.title.setText(Title);
                },
                loop: true,
            });
        });

        // creates the dom form
        this.nameInput = this.add.dom(game.config.width / 2, game.config.height / 1.5).createFromCache("form");

        // when player hits enter after filling out the form
        this.returnKey.on("down", event => {
            let name = this.nameInput.getChildByName("name");       // sets name variable to whatever player types in

            console.log(name.value);
            
            // checks if player fills in something
            if(name.value != ""){
                scene.menu_bgm.stop();                              // stops menu music
                scene.nameInput.destroy();                          // destroys dom element
                scene.scene.sleep("menuScene");                     // puts menuScene to sleep
                scene.scene.start("playScene", {username: name.value});   // starts playScene and passes name
            }
        });
    }
}