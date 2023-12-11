import { useLocalStorage } from 'usehooks-ts';

export const useThemeMode = () => {
  const [mode, setMode] = useLocalStorage<'dark' | 'light'>(
    'theme-mode',
    'light'
  );

  return { mode, setMode };
};
