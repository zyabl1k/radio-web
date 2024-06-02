import { FunctionComponent, lazy } from 'react'
import { __APPLICATION__ } from '@/shared/config'
import { Route, Routes } from 'react-router'

const NotFoundView = lazy(() => import('./notfound/notfound.view'));

export const Routing: FunctionComponent = () => {
  const { routes } = __APPLICATION__;

  return (
    <Routes>
      <Route path={routes.any} element={<NotFoundView />} />
    </Routes>
  )
}