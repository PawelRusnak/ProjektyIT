import React, { useState } from 'react'

import { styled } from '@material-ui/core/styles';
import TaskTile from './TaskTile';
import Column from './Column';
import Header from './Header';

const Section = styled('div')({
  display: 'flex',
  alignItems: 'stretch',
  minHeight: 150,
})

const StorySection = ({ task, sections, moveTask, openDialog }) => {
  const [hidden, setHidden] = useState(false);

  const handleArrowClick = (taskId) => {
    setHidden(!hidden);
  }

  return (
    <>
      <Header task={task} hidden={hidden} handleArrowClick={handleArrowClick} />
      <Section
        style={hidden ? { minHeight: 0 } : {}}
      >
        {!hidden && sections.map(section =>
          <Column taskId={task.id} moveTask={moveTask} section={section}>
            {task.subtasks.map(subtask =>
              subtask.status === section && <TaskTile parentId={task.id} task={subtask} openDialog={openDialog} />
            )}
          </Column>
        )}
      </Section>
    </>
  )
}

export default StorySection