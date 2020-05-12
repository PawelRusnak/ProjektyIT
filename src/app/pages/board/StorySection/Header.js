import React from 'react';
import { styled } from '@material-ui/core/styles';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'

const Container = styled('div')({
  top: 180,
  position: 'sticky',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
})

const Header = ({ task, handleArrowClick, hidden }) => {

  return (
    <Container>
      {hidden ? <KeyboardArrowRight onClick={() => handleArrowClick(task.id)} /> : <KeyboardArrowDown onClick={() => handleArrowClick(task.id)} />}

      <span>{task.type} {task.id} {task.status} {task.name} {task.subtasks.lenght}</span>
    </Container>
  )

}

export default Header;