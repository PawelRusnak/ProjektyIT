import React from 'react';
import { Dialog, DialogTitle, Button } from '@material-ui/core';
import TimeEntry from './TimeEntry';

const DayDetailsDialog = ({ open, closeDialog, data, newEntry }) => {
  console.log(data)
  return (
    <Dialog open={open} onClose={closeDialog} fullWidth maxWidth={'xs'}>
      <DialogTitle>Szczegóły dnia {data?.day}</DialogTitle>
      {data?.data && data.data.map(detail => {
        return <TimeEntry entry={detail} />
      })}
      <Button onClick={newEntry}>Dodaj kolejny</Button>
    </Dialog>
  )
}

export default DayDetailsDialog;