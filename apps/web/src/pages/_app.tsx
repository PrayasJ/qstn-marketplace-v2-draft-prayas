import '../styles.css';
import '@sekmet/radix-ui-themes/styles.css';
import '../globals.css';

import Providers from '@components/Common/Providers';
import { useThemeMode } from '@hooks/useThemeMode';
import { Theme } from '@sekmet/radix-ui-themes';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  const { mode } = useThemeMode();

  return (
    <Theme appearance={mode} accentColor="purple">
      <style jsx global>{`
        body {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </Theme>
  );
};

export default App;
