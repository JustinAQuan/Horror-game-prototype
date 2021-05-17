class pause extends Phaser.Scene {
    constructor(){
        super("pause");
    }

    preload(){

    }

    create(){
        this.add.rectangle(
            0, 
            0, 
            game.config.width - monitorBorderX, 
            game.config.height - monitorBorderY,
            0x333333
        ).setOrigin(0,0);
    }
}