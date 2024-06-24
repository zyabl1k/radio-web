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
  imgHolderUrl: string;
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
 * @Pagination
 */
interface initialStatePagination {
  music: number
  playlist: number
}

/**
 * @Music
 */
interface IMusicList {
  head: number
  body: IMusic[]
}

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
 * @Playlist
 */
export interface IPlayList {
  head: number
  body: IPlaylist[]
}

export interface IPlaylist {
  id: number
  name: string
  description: string
  imgPath: string
}

interface IPlaylistCardComponent {
  playlist: IPlaylist
}

interface ICreatePlaylist {
  name: string
  description: string
  file: File | undefined
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

interface IEmpty {
  emoji: string
  title: string
  description: string
}

type IAlertState = Omit<IAlert, 'resetShow'>
