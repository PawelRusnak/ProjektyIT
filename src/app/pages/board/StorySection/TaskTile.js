import React from 'react'
import { Paper } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useDrag } from 'react-dnd';
import { red } from '@material-ui/core/colors';

const prioColors = ['red', '#ff8400', '#fff200', '#a2ff00', '#26ff00']

const StyledPaper = styled(Paper)({
  minHeight: 100,
  marginBottom: 10,
  padding: 5,
});

const Name = styled('div')({
  padding: 7,
})

const MoreInfo = styled('div')({
  color: '#828282'
});
const Hour = styled('span')({
  color: '#ffffff',
  backgroundColor: '#9e9e9e',
  borderRadius: 5,
  padding: 2
});

const Id = styled('div')({
  color: '#828282',
  float: 'right'
});

const Bar = styled('div')(({ color }) => ({
  backgroundColor: color,
  width: 7,
  height: 10,
  marginRight: 1,
  borderRadius: 7
}));

const Prio = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

const TaskTile = ({ parentId, openDialog, task }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'task', taskId: task.id, parentId },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })

  const prioVizualized = (bars) => {
    let result = [];

    for (let i = 5; i >= bars; i--) {
      result.push(<Bar color={prioColors[bars - 1]} />)
    }

    return result;
  }

  return (
    <StyledPaper ref={dragRef} onClick={() => openDialog(task.id)} style={{ opacity }}>
      <Name>{task.name}</Name>
      <MoreInfo>{task.estimate} godz.</MoreInfo>
      <MoreInfo>{task.osoba}</MoreInfo>
      <div>Pozostało: <Hour>{task.estimate - task.logged} godz.</Hour> </div>
      <Prio>Priorytet:  {prioVizualized(task.prio)}</Prio>
      <Id>{task.id}</Id>
    </StyledPaper>
  )
}

export default TaskTile;