import React from 'react';
import { styled } from '@material-ui/core/styles';


const Container = styled('div')({
  top: 140,
  position: 'sticky',
  backgroundColor: '#ffffff'
})

const Header = ({ task }) => {

  return (
    <Container>
      {task.type} {task.id} {task.status} {task.name} {task.subtasks.lenght}
    </Container>
  )

}

export default Header;