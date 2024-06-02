import { FunctionComponent } from 'react';
import { Navbar } from 'flowbite-react';
import { NavbarCard } from '@/widgets/navbar/ui/navbar-link.ui.tsx'
import { Feature } from '@/features'
import { LuMusic } from 'react-icons/lu'

export const NavbarWidget: FunctionComponent = () => {
  return(
    <Navbar className="p-2 z-10 flex justify-between bg-root-card-light dark:bg-root-card-dark">
      <Navbar.Brand href="/">
        <div className="flex flex-col items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ItHub</span>
          <span>music</span>
        </div>
      </Navbar.Brand>
      <div className="flex flex-row sm:hidden gap-2">
        <NavbarCard icon={<LuMusic />} text="Музыка" link="/"/>
      </div>
      <div className="flex items-center gap-2 md:order-2">
        <Feature.ThemeToggle />
        <Navbar.Toggle className="sm:block hidden" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="flex items-center gap-2" href="/"><LuMusic />Музыка</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}