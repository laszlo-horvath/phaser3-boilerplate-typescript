import 'phaser';
import { Scenes } from 'scenes/keys';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: Scenes.BOOT
    });
  }

  create() {
    console.log(`create ${Scenes.BOOT}`);
    this.scene.start(Scenes.PRELOAD);
  }

  shutdown() {
    console.log(`shutdown ${Scenes.BOOT}`);
  }
}
