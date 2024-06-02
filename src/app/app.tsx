import { FunctionComponent, ReactElement } from 'react'
import { withProviders } from '@/app/providers'
import { Flowbite } from 'flowbite-react'
import { Widget } from '@/widgets';
import { Routing } from '@/pages'

export const App: FunctionComponent = () => {
  return withProviders((): ReactElement => {
    return (
      <Flowbite>
        <div className="dark:bg-root-bg-dark w-full min-h-screen bg-root-bg-light">
          <Widget.Navbar />
          <div className="w-full flex justify-center p-10">
            <Routing />
          </div>
        </div>
      </Flowbite>
    )
  })();
};