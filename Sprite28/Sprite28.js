/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite28 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite28/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./Sprite28/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite28/sounds/Meow.wav")];

    this.triggers = [];
  }
}
