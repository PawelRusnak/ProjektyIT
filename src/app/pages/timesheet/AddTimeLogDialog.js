import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Fab } from "@material-ui/core";
import { styled } from '@material-ui/core/styles';

const DateRow = styled('div')({
  display: 'flex',
  alignItems: 'baseline'
})

const AddTimeLogDialog = ({ open, closeDialog, date, task, enableActionSection }) => {
  const [data, setData] = useState({});
  const now = new Date();

  useEffect(() => {
    setData({ date })
  }, [date])

  const addTimeLog = () => {
    closeDialog();
  }

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  return (
    <Dialog
      open={open}
      onClose={closeDialog}
    >
      <DialogTitle>Zarejestruj godziny</DialogTitle>
      <DialogContent>
        {enableActionSection ? <TextField
          autoFocus
          label="Zadanie"
          name="task"
          onChange={handleChange}
          value={data.task || ''}
          fullWidth
        /> : { task }}
        <TextField
          label="Data"
          type="date"
          defaultValue={data?.date || `${now.getFullYear()}-${(now.getMonth() + 101).toString().substring(1)}-${(now.getDate() + 100).toString().substring(1)}`}
          onChange={handleChange}
          fullWidth
        />
        <DateRow>
          <TextField
            label="Liczba Godzin"
            name="timespan"
            onChange={handleChange}
            value={data.timespan || ''}
            type="number"
          />
          <span style={{ margin: 5 }}>lub </span>
          <TextField
            style={{ width: 180 }}
            label="Godzina rozpoczecia"
            name="start'"
            onChange={handleChange}
            defaultValue={`${now.getHours()}:${now.getMinutes()}`}
            type="time"
          />
          <TextField
            style={{ width: 180 }}
            label="Godzina zakończenia"
            name="end"
            onChange={handleChange}
            defaultValue={`${now.getHours()}:${now.getMinutes()}`}
            type="time"
          />
        </DateRow>
        <TextField
          label="Dodatkowy opis"
          name="description"
          onChange={handleChange}
          value={data.description || ''}
          fullWidth
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={addTimeLog} color="primary">
          Dodaj
          </Button>
        <Button onClick={closeDialog} color="primary">
          Anuluj
          </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddTimeLogDialog;