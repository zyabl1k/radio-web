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
interface __APPLICATION_CONFIG__ {
  baseUrl: string;
  limit: number;
  routes: Readonly<{
    music: string;
    any: string;
  }>;
}

/**
 * @Modal
 */
interface ICreateModal {
  openModal: boolean;
  setOpenModal: (show: boolean) => void;
}

/**
 * @Music
 */
interface IMusic {
  id: number
  name: string
  namePLayList: string
  timeMusic: number
}

interface ICreateMusic {
  namePlayList: string
  file: string
}

interface IMusicCardComponent {
  music: IMusic
}

interface IMusicSettingsComponent {
  setOpenModal: (show: boolean) => void;
}

/**
 * @Widgets
 */
interface IAlert {
  text: string;
  status: string;
  show: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  resetShow: Function;
}

type IAlertState = Omit<IAlert, 'resetShow'>
