class clickable extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.create();
    }

    create() {
        this.setInteractive({ cursor: 'pointer' });
        this.on('pointerdown', function(pointer) {
            console.log('click');
            console.log(pointer);
        })
    }

    update() {

    }
}