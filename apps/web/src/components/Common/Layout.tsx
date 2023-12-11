import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header';
import getToastOptions from '@lib/getToastOptions';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import type { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
//import { hydrateAuthTokens, signOut } from 'src/store/useAuthPersistStore';
//import { useNonceStore } from 'src/store/useNonceStore';
//import { usePreferencesStore } from 'src/store/usePreferencesStore';
import { useEffectOnce, useIsMounted } from 'usehooks-ts';
import { useAccount, useDisconnect } from 'wagmi';

//import GlobalModals from '../Shared/GlobalModals';
import Loading from '../Shared/Loading';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  //const { setCurrentProfile } = useAppStore();
  //const { loadingPreferences, resetPreferences } = usePreferencesStore();

  const isMounted = useIsMounted();
  const { connector } = useAccount();
  const { disconnect } = useDisconnect();

  //const currentSessionProfileId = 0; //getCurrentSessionProfileId();

  const logout = () => {
    //resetPreferences();
    //signOut();
    disconnect?.();
  };

  const loading = false;
  const loadingPreferences = false;

  useEffectOnce(() => {
    // Listen for switch account in wallet and logout
    connector?.addListener('change', () => logout());
  });

  const validateAuthentication = () => {
    //const { accessToken } = hydrateAuthTokens();
    const accessToken = true;
    if (!accessToken) {
      logout();
    }
  };

  useEffectOnce(() => {
    validateAuthentication();
  });

  if (loading || loadingPreferences || !isMounted()) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={resolvedTheme === 'dark' ? '#1b1b1d' : '#F4F4F5'}
        />
      </Head>
      <Toaster
        position="bottom-right"
        containerStyle={{ wordBreak: 'break-word' }}
        toastOptions={getToastOptions(resolvedTheme)}
      />
      <div>
        <Header.DesktopHeader />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
