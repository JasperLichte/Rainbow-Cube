import Cube from './Cube.js';
import colors from './../../../colors.js';

export default class Player extends Cube {

  constructor() {
    super(colors['objects-player']);
  }

  public tweakPosition(): Player {
    this.object.position.y -= 0.15;
    return this;
  }  

}
