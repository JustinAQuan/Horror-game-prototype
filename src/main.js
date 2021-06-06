/**************************************************
 * Group Members:   Michelle Lytle
 *                  Thea Knasiak
 *                  Justin Quan
 *                  Divyansh Khare
 * 
 * Game:            NEVER ALONE
 * 
 * Date Completed:  6/6/21 
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
    scene: [preload, menu, play, pause, end],
};

let game = new Phaser.Game(config);

let monitorBorderX = 34;
let monitorBorderY = 33;
var text1;
// initializes debug variables 
let pathInput = null;
let pathText;
// whether game has been reset
let restart = false;

/**************************************************
 *                 CREDITS 
 * 
 * Windows Startup Sound
 * https://soundbible.com/1654-Windows-95-Startup.html
 * 
 * W95FA Font Family
 * Created by Alina Sava
 * https://fontsarena.com/w95fa-by-fontsarena/
 * 
 * Our preload code is based on an example by Scott Westover: 
 * https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/
 * 
 * Virus animations are from The Malware Museum:
 * https://archive.org/details/malwaremuseum?tab=collection
 * 
 * Static Animation:
 * https://www.videezy.com/elements-and-effects/244-bad-tv-reception-stock-video-clip
 * 
 * Eye Animation: 
 * https://www.videezy.com/backgrounds/50667-futuristic-tv-eye-flickers
 * 
 * Our game is made using Phaser 3. 
 **************************************************/