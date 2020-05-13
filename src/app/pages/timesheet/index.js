import React, { useState } from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import GeneralApiClient from '../../../api/GeneralApiClient';
import AddTimeLogDialog from './AddTimeLogDialog';
import { Fab, Button } from '@material-ui/core';
import DayDetailsDialog from './DayDetailsDialog';

const GeneralApi = new GeneralApiClient();

const ClickableTableCell = styled(TableCell)(({ color }) => ({
  cursor: 'pointer',
  backgroundColor: color,
  '&:hover': {
    backgroundColor: '#ebecf0'
  }
}));

const ColoredTableCell = styled(TableCell)(({ color }) => ({
  backgroundColor: color,
}));

const DateField = styled('div')({

});

function createData(name, logs) {
  return { name, logs };
}

const rows = [
  createData('Paweł Rusnak', [8, 8, 8, 0, 0, 24, 8, 8, 8, 8, 0, 0, 8, 8, 8]),
  createData('Jan Kowalski', [8, 8, 8, 0, 0, 8, 8, 0, 0, 0, 0, 0, 0, 8, 8]),
];

const Timesheet = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dayDetailsOpen, setDayDetailsOpen] = useState(false);
  const [dayData, setDayData] = useState();

  const now = new Date();
  const days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  const generateColumns = () => {
    let rows = [];

    for (let i = 0; i < days; i++) {
      let day = new Date(now.getFullYear(), now.getMonth() - 1, i);
      rows.push(
        <ColoredTableCell
          color={(day.getDay() === 5 || day.getDay() === 6) ? '#e6e7eb' : 'white'}
        >
          {i + 1}
        </ColoredTableCell>)
    }

    return rows;
  }

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  }
  const toggleDetailsDialog = () => {
    setDayDetailsOpen(!dayDetailsOpen);
  }

  const openDetails = (name, day) => {
    GeneralApi.getDayDetails().then(response => {
      setDayData({ data: response.data.details, day: `${now.getFullYear()}-${(now.getMonth() + 101).toString().substring(1)}-${(day.getDate() + 101).toString().substring(1)}` })
    })
    toggleDetailsDialog();
  }

  const fillRow = (row) => {
    let cells = [];

    for (let i = 0; i < days; i++) {
      let day = new Date(now.getFullYear(), now.getMonth() - 1, i);
      cells.push(
        <ClickableTableCell
          color={(day.getDay() === 5 || day.getDay() === 6) ? '#f0f1f5' : 'white'}
          onClick={() => openDetails(row.name, day)}
        >
          {row.logs[i] !== 0 && row.logs[i]}
        </ClickableTableCell>)
    }

    return cells;
  }
  return (
    <>
      <DateField>{`1-${days} ${now.toLocaleString("default", { month: "long" }).toUpperCase()} ${now.getFullYear()}`}</DateField>
      <TableContainer component={Paper} >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pracownik</TableCell>
              {generateColumns()}
              <ColoredTableCell color={'#f7f7f7'}>Suma</ColoredTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                {fillRow(row)}
                <ColoredTableCell color={'#f7f7f7'}>
                  {row.logs.reduce((a, b) => a + b, 0)}
                </ColoredTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant={'outlined'} onClick={toggleDialog}>Dodaj godziny</Button>
      <DayDetailsDialog open={dayDetailsOpen} closeDialog={toggleDetailsDialog} newEntry={() => { setDayDetailsOpen(false); setDialogOpen(true) }} data={dayData} />
      <AddTimeLogDialog
        date={dayData?.day}
        open={dialogOpen}
        closeDialog={toggleDialog}
        enableActionSection={true}
      />
    </>
  );
}

export default Timesheet;