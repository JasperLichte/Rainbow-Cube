import RenderEnineHelperParent from './renderEngines/RenderEngineHelper.js';
import Element from '../interfaces/Element.js';
import Player from '../logic/objects/Player.js';

export default class RenderHelper {

  private helper: RenderEnineHelperParent;

  public setEngineHelper(helper) {
    this.helper = helper;
  }

  public getHelper(): RenderEnineHelperParent {
    return this.helper;
  }

  public getMode(): string {
    if (!this.helper) {
      return null;
    }

    return this.helper.getMode();
  }

  public static buildMovingElementsArray(engineHelper: RenderEnineHelperParent): Element[] {
    const elements: Element[] = [];

    elements.push({
      object: engineHelper.getPlayer(),
      logic: new Player(engineHelper.getPlayer().getInitialPosition())
    });

    return elements;
  }

}
