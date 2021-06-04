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
            this.anims.create({
                key: 'skynet',
                frames: this.anims.generateFrameNames('SKYNET_anims', {prefix: 'SKYNET_', end: 16, zeroPad: 2}),
                frameRate: 12
            });

            this.skynet = this.add.sprite(-80, 0, 'SKYNET').setOrigin(0,0).setScale(1.5);
            this.skynet.play('skynet');
        }

        else if(this.ending == "PATH 2"){
            this.anims.create({
                key: 'qwalker',
                frames: this.anims.generateFrameNames('Q-WALKER_anims', {prefix: 'Q-WALKER_', end: 14, zeroPad: 2}),
                repeat: -1,
                frameRate: 12
            });

            this.qwalker = this.add.sprite(0, 0, 'SKYNET').setOrigin(0,0).setScale(1.5);
            this.qwalker.play('qwalker');
        }

        else if(this.ending == "PATH 3"){
            this.anims.create({
                key: 'kuku',
                frames: this.anims.generateFrameNames('KUKU_anims', {prefix: 'KUKU_', end: 16, zeroPad: 2}),
                repeat: -1,
                frameRate: 12
            });

            this.kuku = this.add.sprite(0, 0, 'SKYNET').setOrigin(0,0).setScale(1.5);
            this.kuku.play('kuku');
        }

        else{
            this.gameover = this.add.text(game.config.width / 2, game.config.height / 2 - 50, "GAME OVER", {fontFamily: 'VT323', fontSize: "100px", color: 0xffffff, align: "center"}).setOrigin(.5,.5);

            this.time.delayedCall(3000, () =>{
                scene.gameover.setText("GAME OVER ?")
            });
        }

        this.retryblock = this.add.rectangle(game.config.width / 2, game.config.height / 2 + 160, 300, 60, 0x666666).setOrigin(.5,.5).setInteractive( {cursor: 'pointer'} );
        this.retry = this.add.text(game.config.width / 2, game.config.height / 2 + 156, "PLAY AGAIN?", {fontFamily: 'VT323', fontSize: "50px", color: 0xffffff}).setOrigin(.5,.5).setInteractive( {cursor: 'pointer'} );
    
        this.retryblock.on('pointerdown', function(){
            scene.sound.play('click');
            scene.scene.stop();
            restart = true;
            scene.scene.wake("menuScene");
        });

        this.retry.on('pointerdown', function(){
            scene.sound.play('click');
            scene.scene.stop();
            restart = true;
            scene.scene.wake("menuScene");
        });
    }
}