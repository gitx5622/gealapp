import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useAccountInit from '../../hooks/useAccountInit';
import usePageLoader from '../../hooks/usePageLoader';
import SnackInfo from '../../utils/SnackInfo';
import useServiceWorkerLifecycle from '../../hooks/useServiceWorkerLifecycle';

const InitializeApp = ({
  children
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  usePageLoader();
  const swSnackInfo = useServiceWorkerLifecycle();

  const [internetSnackInfo, setInternetSnackInfo] = useState({
    open: false,
    message: '',
    vertical: 'top',
    horizontal: 'center',
    severity: 'info',
    autoHideDuration: 5000,
  });

  if (typeof window !== 'undefined') {
    try {
      localStorage.activeUser && JSON.parse(localStorage.currentUser);
      localStorage.roles && JSON.parse(localStorage.roles);
    } catch (error) {
      localStorage.clear();
      // dispatch({ type: 'RESET_STORE' });
      router.replace('/');
    }
    

    window.onoffline = () => {
        setInternetSnackInfo(snackInfo => ({
          ...snackInfo,
          open: true,
          message: 'You lost connection to the internet',
          severity: 'error',
          vertical: 'top',
          horizontal: 'center',
          autoHideDuration: null,
        }));
    };

    window.ononline = () => {
        setInternetSnackInfo(snackInfo => ({
          ...snackInfo,
          open: true,
          message: 'You are back online',
          severity: 'success',
          vertical: 'top',
          horizontal: 'center',
          autoHideDuration: 3000,
        }));
    };
  }

  return (
    <div className="app-wrapper">
      <Head>
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
        </noscript>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      {children}
      <SnackInfo snackInfo={swSnackInfo} />
      <SnackInfo
        snackInfo={internetSnackInfo}
        handleClose={() =>
          setInternetSnackInfo(internetSnackInfo => ({
            ...internetSnackInfo,
            open: false,
          }))
        }
      />
    </div>
  );
};

export default InitializeApp;
