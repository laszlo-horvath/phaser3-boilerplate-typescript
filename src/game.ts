
import { BootScene, PreloadScene, MenuScene, GameScene } from './scenes';

const config: Phaser.Types.Core.GameConfig = {
  title: 'Your Game',
  version: '1.0',

  // Canvas scale
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game-container',
    width: 750,
    height: 1334
  },

  // Automatically detect supported rendering engine to use (e.g. Canvas, WebGL)
  type: Phaser.AUTO,

   // DOM element to render the game into
  parent: 'game-container',

  // Scenes
  scene: [
    BootScene,
    PreloadScene,
    MenuScene,
    GameScene
  ]
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.addEventListener('load', () => {
  const game = new Game(config);
  console.log('Game created.', game);
});
