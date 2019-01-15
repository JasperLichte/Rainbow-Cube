const THREE = window.THREE;
import colors from './../../colors.js';

export default class Spike {

  constructor() {
    this._geometry = new THREE.ConeGeometry(0.2, 0.5, 32);
    this._material = new THREE.MeshBasicMaterial({color: colors['objects-spike']});
    this._object = new THREE.Mesh(this._geometry, this._material);

    console.log(this._object.position)

    //------------
    this.getObject = this.getObject.bind(this);
    //------------
  }

  getObject() {
    return this._object;
  }

}