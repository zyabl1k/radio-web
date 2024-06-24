import { FunctionComponent, lazy } from 'react'
import { __APPLICATION__ } from '@/shared/config'
import { Route, Routes } from 'react-router'

const MusicView = lazy(() => import('./music/musix.view'));
const StreamView = lazy(() => import('./stream/stream.view'));
const NotFoundView = lazy(() => import('./notfound/notfound.view'));

export const Routing: FunctionComponent = () => {
  const { routes } = __APPLICATION__;

  return (
    <Routes>
      <Route path={routes.music} element={<MusicView />} />
      <Route path={routes.stream} element={<StreamView />} />
      <Route path={routes.any} element={<NotFoundView />} />
    </Routes>
  )
}