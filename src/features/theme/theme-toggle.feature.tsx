import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from 'flowbite-react';
import { useTypedSelector } from '@/shared/hooks/redux/redux.selector.ts';
import { useActions } from '@/shared/hooks/redux/redux.actions.ts';
import { FunctionComponent, useEffect } from 'react';

const ThemeToggleFeature: FunctionComponent = () => {
  const isDark = useTypedSelector((state) => state.ThemeReducer);
  const { changeTheme } = useActions();

  const handleThemeToggle = () => {
    changeTheme();
  };

  useEffect(() => {
    if (isDark?.isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [!isDark?.isDark]);

  return(
    <Button color="primari" onClick={handleThemeToggle}>
      {isDark?.isDark ? <FaSun className="transition hover:text-root-violet" size={30} /> : <FaMoon className="transition hover:text-root-violet" size={30} />}
    </Button>
  )
}

export default ThemeToggleFeature;