import React from 'react';
import { styled } from '@material-ui/core/styles';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'

const Container = styled('div')({
  top: 239,
  position: 'sticky',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
})

const Status = styled('span')({
  border: '1px solid gray',
  paddingLeft: 3,
  paddingRight: 3
});

const Header = ({ task, handleArrowClick, hidden, sections }) => {

  return (
    <Container>
      {hidden ? <KeyboardArrowRight onClick={() => handleArrowClick()} /> : <KeyboardArrowDown onClick={() => handleArrowClick(task.id)} />}

      <span>{task.id} <Status>{task.status}</Status> {task.name} {task.subtasks.lenght}</span>
    </Container>
  )

}

export default Header;