import { FunctionComponent, lazy } from 'react'
import { __APPLICATION__ } from '@/shared/config'
import { Route, Routes } from 'react-router'

const MusicView = lazy(() => import('./music/musix.view'));
const StreamView = lazy(() => import('./stream/stream.view'));
const PlaylistView = lazy(() => import('./playlist/playlist.view'));
const ScenariosView = lazy(() => import('./scenario/scenario-list.view'));
const NotFoundView = lazy(() => import('./notfound/notfound.view'));

export const Routing: FunctionComponent = () => {
  const { routes } = __APPLICATION__;

  return (
    <Routes>
      <Route path={routes.music} element={<MusicView />} />
      <Route path={routes.stream} element={<StreamView />} />
      <Route path={routes.playlist} element={<PlaylistView />} />
      <Route path={routes.scenarios} element={<ScenariosView />} />
      <Route path={routes.any} element={<NotFoundView />} />
    </Routes>
  )
}