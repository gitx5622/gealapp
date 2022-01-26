import { useEffect } from 'react';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';

const usePageLoader = () => {
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({
      minimum: 0.3,
      easing: 'ease',
      speed: 500,
      showSpinner: false,
      trickleRate: 0.2,
      trickleSpeed: 800,
    });

    let routeChangeStart = () => NProgress.start();
    let routeChangeComplete = () => NProgress.done();

    router.events.on('routeChangeStart', routeChangeStart);
    router.events.on('routeChangeComplete', routeChangeComplete);
    router.events.on('routeChangeError', routeChangeComplete);
    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      router.events.off('routeChangeComplete', routeChangeComplete);
      router.events.off('routeChangeError', routeChangeComplete);
    };
  }, [router.events]);
};

export default usePageLoader;
