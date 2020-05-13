import React from 'react';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const Row = styled(Paper)({
  backgroundColor: 'white',
  marginTop: 5,
  marginBottom: 5,
  height: 40,
  display: 'flex',
});

const Id = styled('div')({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 10,
  paddingRight: 10
})

const Title = styled('div')({
  height: '50%',

});

const TaskRow = ({ task }) => {
  return (
    <Row elevation={1}>
      <Id><span>{task.id}</span></Id>
      <Title><div style={{ fontWeight: 600 }}>{task.name}</div>
        <div>{`${task.status}, pozostało ${task.left} godz.`}</div></Title>
    </Row>
  )
}

export default TaskRow;