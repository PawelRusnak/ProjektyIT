import React from 'react';
import { styled } from '@material-ui/core/styles';
import { useDrop } from 'react-dnd'

const Container = styled('div')((canDrop, isOver) => ({
  display: 'flex',
  alignItems: 'stretch',
  width: '100%',
  backgroundColor: '#f4f5f7',
  margin: 5,
  flexDirection: 'column',
  padding: 10
}))

const Column = ({ taskId, children, moveTask, section }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'task',
    canDrop: item => item.parentId === taskId,
    drop: item => moveTask(taskId, item.taskId, section.order),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })

  return (
    <Container
      ref={drop}
      canDrop={canDrop}
      isOver={isOver}
      style={{
        backgroundColor: canDrop ? (isOver ? '#f3f9f4' : '#ebf2f9') : '#f4f5f7',
        outline: canDrop ? (isOver ? '3px dotted #14882c' : '3px dotted #3b73af') : 'none'
      }}>
      {children}
    </Container>
  );
}

export default Column;