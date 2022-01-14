import * as React from "react";
import { CustomProvider } from 'rsuite';
import '../styles/globals.css';
import "react-multi-carousel/lib/styles.css";
import 'rsuite/dist/rsuite.min.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { useStore } from '../state';

function MyApp({ Component, pageProps }) {
  const store = useStore();
  return (
    <React.Fragment>
      <CustomProvider themes="dark">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </CustomProvider>
    </React.Fragment>
  )

}

export default MyApp
