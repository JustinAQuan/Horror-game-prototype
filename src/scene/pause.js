class pause extends Phaser.Scene {
    constructor(){
        super("pause");
    }

    preload(){

    }

    create(){
        let scene = this;

        this.greyBackground = this.add.rectangle(
            monitorBorderX, 
            monitorBorderY, 
            game.config.width - monitorBorderX * 2, 
            game.config.height - monitorBorderY * 2,
            0x333333
        ).setOrigin(0,0);

        this.greyBackground.setAlpha(0.7);

        this.resumeButton = this.add.rectangle(
            game.config.width / 2,
            game.config.height / 2,
            300,
            75,
            0x333333
        ).setOrigin(0.5,0.5);

        this.exitButton = this.add.rectangle(
            game.config.width / 2,
            game.config.height / 2 + 100,
            300,
            75,
            0x333333
        ).setOrigin(0.5,0.5);

        this.resumeButton.setInteractive( {cursor: 'pointer'} );
        this.exitButton.setInteractive( {cursor: 'pointer'} );

        this.add.text(
            game.config.width / 2,
            game.config.height / 2,
            "Resume",
            {
                fontSize: "30px",
                color: 0xffffff
            }
        ).setOrigin(0.5,0.5);
        
        this.add.text(
            game.config.width / 2,
            game.config.height / 2 + 100,
            "Exit",
            {
                fontSize: "30px",
                color: 0xffffff
            }
        ).setOrigin(0.5,0.5);

        this.add.text(
            game.config.width / 2,
            game.config.height / 2 - 150,
            "PAUSED",
            {
                fontSize: "50px",
                color: 0xffffff
            }
        ).setOrigin(0.5,0.5);

        this.resumeButton.on('pointerdown', function() {
            scene.scene.stop();
            scene.scene.resume("playScene");
        });

        this.exitButton.on('pointerdown', function() {
            scene.scene.stop();
            scene.scene.stop("playScene");
            scene.scene.wake("menuScene");
        })
    }
}