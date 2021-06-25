import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent } from '@material-ui/core';


const SimpleDialog = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogContent autoFocus button onClick={() => handleListItemClick('addAccount')}>
        <img
            className="rounded mr-2"
            alt=""
            width="100%"
            src={selectedValue}
        />
      </DialogContent>
    </Dialog>
  );
}

export default SimpleDialog
