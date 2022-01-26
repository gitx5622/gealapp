import { Fragment } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

/**
 * @description SnackInfo Component
 * @param {*} props
 */

const SnackInfo = ({ snackInfo, handleClose }) => {
  const {
    open = false,
    vertical = 'bottom',
    horizontal = 'left',
    message = '',
    severity = 'info',
    autoHideDuration,
    hideClose,
  } = snackInfo;

  // const merchantProfileState = useSelector(store => store.merchantProfileState);
  // const { viewMode, isBusinessOwner } = merchantProfileState;

  const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      key={`${vertical} ${horizontal}`}
      open={open}
      onClose={handleClose}
      autoHideDuration={autoHideDuration}
    >
      <Alert
        severity={severity}
        action={
          <Fragment>
            {snackInfo.snackbarAction && (
              <button
                className="custom-button outlined white"
                onClick={snackInfo.snackbarAction.handler}
              >
                {snackInfo.snackbarAction.title}
              </button>
            )}
            {/*{viewMode && !isBusinessOwner && !hideClose && (*/}
            {/*  <IconButton size="small" onClick={handleClose}>*/}
            {/*    <CloseIcon style={{ color: '#fff' }} />*/}
            {/*  </IconButton>*/}
            {/*)}*/}
          </Fragment>
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackInfo;
