class end extends Phaser.Scene {
    constructor(){
        super("endScene");
    }

    init(data){
        this.ending = data.ending;
    }

    create(){
        let scene = this;

        // resets debug input 
        pathInput = null;

        this.monitor = this.add.sprite(0, 0, 'monitor_border').setOrigin(0,0);
        this.homescreen = this.add.sprite(monitorBorderX, monitorBorderY, 'homescreen').setOrigin(0,0);

        if(this.ending == "PATH 1"){
            this.add.text(game.config.width / 2, game.config.height / 2 - 50, "YAY YOU\mFINISHED\nPATH 1", {fontFamily: 'VT323', fontSize: "100px", color: 0xffffff, align: "center"}).setOrigin(.5,.5);
        }

        else if(this.ending == "PATH 2"){
            this.add.text(game.config.width / 2, game.config.height / 2 - 50, "YAY YOU\nFINISHED\nPATH 2", {fontFamily: 'VT323', fontSize: "100px", color: 0xffffff, align: "center"}).setOrigin(.5,.5);
        }

        else if(this.ending == "PATH 3"){
            this.add.text(game.config.width / 2, game.config.height / 2 - 50, "YAY YOU\nFINISHED\nPATH 3", {fontFamily: 'VT323', fontSize: "100px", color: 0xffffff, align: "center"}).setOrigin(.5,.5);
        }

        else{
            this.gameover = this.add.text(game.config.width / 2, game.config.height / 2 - 50, "GAME OVER", {fontFamily: 'VT323', fontSize: "100px", color: 0xffffff, align: "center"}).setOrigin(.5,.5);

            this.time.delayedCall(3000, () =>{
                scene.gameover.setText("GAME OVER ?")
            });
        }

        this.retryblock = this.add.rectangle(game.config.width / 2, game.config.height / 2 + 155, 120, 60, 0x666666).setOrigin(.5,.5).setInteractive( {cursor: 'pointer'} );
        this.retry = this.add.text(game.config.width / 2, game.config.height / 2 + 150, "Retry", {fontFamily: 'VT323', fontSize: "50px", color: 0xffffff}).setOrigin(.5,.5).setInteractive( {cursor: 'pointer'} );
    
        this.retryblock.on('pointerdown', function(){
            scene.sound.play('click');
            scene.scene.stop();
            scene.scene.wake("menuScene");
        });

        this.retry.on('pointerdown', function(){
            scene.sound.play('click');
            scene.scene.stop();
            scene.scene.wake("menuScene");
        });
    }
}