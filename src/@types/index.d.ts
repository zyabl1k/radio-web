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
 * @Stream
 */
interface IRecorderInitialState {
  recordingMinutes: number
  recordingSeconds: number
  initRecording: boolean
  mediaStream: MediaStream | null;
  mediaRecorder: MediaRecorder | null;
  audio: Blob | null;
}

interface IRecorderController {
  recorderState: IRecorderInitialState
  handlers: IUseRecorder
}

interface IUseRecorder {
  startRecording: () => Promise<void>,
  cancelRecording: () => void,
  saveRecording: () => void
}

interface IRecordings {
  key: string
  audio: Blob | null
}

type RecorderListComponent = Omit<IRecordings, 'key'>

/**
 * @Config
 */
interface __APPLICATION_CONFIG__ {
  baseUrl: string;
  limit: number;
  imgHolderUrl: string;
  constants: Readonly<IConstants>
  routes: Readonly<IRoutes>;
}

interface IRoutes {
  music: string;
  stream: string;
  any: string;
}

interface IConstants {
  recorder: IRecorderInitialState
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
