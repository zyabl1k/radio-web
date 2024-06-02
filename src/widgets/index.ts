import { NavbarWidget } from '@/widgets/navbar/navbar.widget.tsx'
import { ErrorBoundaryWidget } from '@/widgets/error-boundary/error-boundary.widget.tsx'
import { PreloaderWidget } from '@/widgets/preloader/preloader.widget.tsx'
import { AlertInfoWidget } from '@/widgets/alert-info/alert-info.widget.tsx'

export const Widget = {
  Navbar: NavbarWidget,
  ErrorBoundary: ErrorBoundaryWidget,
  Preloader: PreloaderWidget,
  Alert: AlertInfoWidget
}