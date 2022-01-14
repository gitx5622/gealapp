import NextErrorComponent from 'next/error';

const MyError = ({ statusCode, hasGetInitialPropsRun, err }) => {
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err);
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

MyError.getInitialProps = async ({ res, err }) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  });

  errorInitialProps.hasGetInitialPropsRun = true;

  return errorInitialProps;
};

export default MyError;
