class links extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, textstyle){
        super(scene, x, y, text, textstyle)
        scene.add.existing(this);
        this.create(scene);
    }

    create(scene){
        this.setInteractive({ cursor: 'pointer' });
        this.on('pointerdown', function() {
            scene.sound.play('click');
        })
    }
}