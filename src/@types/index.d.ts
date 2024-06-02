import { ReactNode } from 'react'
import ReactDOM from 'react-dom/client';

/**
 * @Core
 */
type ApplicationComponent = () => ReactNode;

interface Applications {
  ApplicationComponent: ApplicationComponent;
  LoadingComponent: ApplicationComponent;
}

interface CoreConfiguration {
  ApplicationDOMNode: () => HTMLDivElement;
  ApplicationComponent: AppComponent;
  ApplicationReactDOM: ReactDOM.Root | null;
}

/**
 * @Config
 */
export interface __APPLICATION_CONFIG__ {
  baseUrl: string;
  routes: Readonly<{
    music: string;
    any: string;
  }>;
}

/**
 * @Widgets
 */
interface IAlert {
  text: string;
  status: string;
  show: boolean;
  resetShow: Function;
}