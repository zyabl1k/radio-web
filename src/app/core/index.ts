import { ApplicationComponent, Applications, CoreConfiguration } from '@types'
import { createRoot } from 'react-dom/client'

export class Core {
  private static instance: Core;

  configuration: CoreConfiguration = {
    ApplicationDOMNode: () => document.getElementById('root') as HTMLDivElement,
    ApplicationComponent: () => void 0,
    ApplicationReactDOM: null,
  };

  constructor() {
    if (!Core.instance) {
      Core.instance = this;
    }
    return Core.instance;
  }

  public setup(applications: Applications): void {
    this.configuration.ApplicationReactDOM = createRoot(
      this.configuration.ApplicationDOMNode()
    );

    this._mount(applications.LoadingComponent);
    this._setApplicationComponent(applications.ApplicationComponent);

    /**
     * @AuthLogic
     */

    this._mount(applications.ApplicationComponent);
  }

  private _mount(component: ApplicationComponent) {
    this.configuration.ApplicationReactDOM!.render(component());
  }

  private _setApplicationComponent(component: ApplicationComponent) {
    this.configuration.ApplicationComponent = component;
  }
}