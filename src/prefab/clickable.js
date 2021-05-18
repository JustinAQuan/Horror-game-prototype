class clickable extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, type) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.create(scene, type);
    }

    create(scene, type) {
        this.setInteractive({ cursor: 'pointer' });
        this.on('pointerdown', function() {
            if(type == "icon"){
                scene.sound.play('double_click');
            }
            else{
                scene.sound.play('click');
            }
        })
    }

    update() {

    }
}