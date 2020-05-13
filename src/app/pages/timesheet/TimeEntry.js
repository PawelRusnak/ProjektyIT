import React from 'react';
import { styled } from '@material-ui/core/styles';

const Entry = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
  margin: 5,
});

const TimeEntry = ({ entry }) => {
  return (
    <Entry>
      <span style={{ width: '100%' }}>{entry.task} </span>
      <span style={{ width: '40%' }}>{entry.time} {entry.span && `(${entry.span})`}</span>
    </Entry>
  );
};

export default TimeEntry;