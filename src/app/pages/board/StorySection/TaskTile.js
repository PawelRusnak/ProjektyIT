import React from 'react'
import { Paper } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useDrag } from 'react-dnd';

const StyledPaper = styled(Paper)({
  minHeight: 100,
  marginBottom: 10,
})

const TaskTile = ({ parentId, openDialog, task }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'task', taskId: task.id, parentId },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })

  return (
    <StyledPaper ref={dragRef} onClick={() => openDialog(task.id)} style={{ opacity }}>
      <div>{task.name}</div>
      <div>{task.estimate}</div>
      <div>{task.tag || 'brak'}</div>
      <div>{task.osoba}</div>
      <div>Pozostało: {task.estimate - task.logged} - Priorytet: {task.prio}</div>
      <div>{task.id}</div>
    </StyledPaper>
  )
}

export default TaskTile;