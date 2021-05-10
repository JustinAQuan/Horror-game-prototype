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

let aspectSize = 200;

let config = {
    type: Phaser.CANVAS,
    width: aspectSize * 4,
    height: aspectSize * 3,
    scene: [menu, play],
};
 
let game = new Phaser.Game(config);

let borderUISize = game.config.height / 25;
let borderPadding = borderUISize / 3;