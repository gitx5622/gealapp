import { useCallback, useEffect, useMemo, useState } from 'react';

const useServiceWorkerLifecycle = () => {
  const wb = useMemo(() => typeof window !== 'undefined' && window.workbox, []);

  const updateToNewVersion = useCallback(() => {
    wb.addEventListener('controlling', () => {
      window.location.reload();
    });
    wb.messageSkipWaiting();
  }, [wb]);

  const [swSnackInfo, setSwSnackInfo] = useState({
    open: false,
    message: 'A newer version of the application is available',
    vertical: 'bottom',
    horizontal: 'right',
    severity: 'info',
    autoHideDuration: null,
    hideClose: true,
    snackbarAction: {
      title: 'Update',
      handler: () => {
        updateToNewVersion();
        setSwSnackInfo(snackInfo => ({ ...snackInfo, open: false }));
      },
    },
  });

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      // wb.addEventListener('waiting', () =>
      //   setSwSnackInfo(swInfo => ({ ...swInfo, open: true }))
      // );

      wb.register();
    }
  }, [wb]);

  return swSnackInfo;
};

export default useServiceWorkerLifecycle;
