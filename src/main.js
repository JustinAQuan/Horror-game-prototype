/**************************************************
 * Group Members:   Michelle Lytle
 *                  Thea Knasiak
 *                  Justin Quan
 *                  Div
 * 
 * Game:            Untitled
 * 
 * Date Completed:  TBD
**************************************************/

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        parent: 'canvas',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    dom: {
        createContainer: true,
        behindCanvas: true
    },
    scene: [menu, play],
};
 
let game = new Phaser.Game(config);

let monitorBorderX = 34;
let monitorBorderY = 33;

/**************************************************
 *                 CREDIT
 * 
 * User login name form
 * https://www.thepolyglotdeveloper.com/2020/09/accept-text-input-user-phaser-game/
 * 
 * 
**************************************************/