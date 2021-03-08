import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface ISnackbarComponent {
  open: boolean;
  error: boolean;
  text: string;
  handleClose: () => void;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackbarComponent({ open, error, text, handleClose }: ISnackbarComponent) {
  return (
    <div>
      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? 'error' : 'success'}>
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
}