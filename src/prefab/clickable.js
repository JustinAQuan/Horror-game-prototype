class clickable extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.create(scene, texture);
    }

    create(scene, texture) {
        //let self = scene;
        this.setInteractive({ cursor: 'pointer' });
        this.on('pointerdown', function(pointer) {
            console.log('click');
            console.log(pointer);

            if (texture === 'inbox') {

                //scene.scene.sleep("playScene");
                scene.scene.start("inboxscene");
            }
        })
    }

    update() {

    }
}