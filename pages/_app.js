import * as React from "react";
import { CustomProvider } from 'rsuite';
import '../styles/globals.css';
import "react-multi-carousel/lib/styles.css";
import 'rsuite/dist/rsuite.min.css';
import { Provider } from 'react-redux';
import { useStore } from '../state';
import InitializeApp from "../containers/app/InitializeApp";

function MyApp({ Component, pageProps }) {
  const { initialServerSideState } = pageProps;

  const store = useStore(
         initialServerSideState
  );
  return (
    <React.Fragment>
      <Provider store={store}>
      <CustomProvider themes="dark">
        <InitializeApp
            initialServerSideState={initialServerSideState}
        >
          <Component {...pageProps} />
        </InitializeApp>
      </CustomProvider>
      </Provider>
    </React.Fragment>
  )

}

export default MyApp
