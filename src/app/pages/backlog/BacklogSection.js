import React, { useState } from 'react'

import { styled, withTheme } from '@material-ui/core/styles';
import Header from './SectionHeader';
import TaskRow from './TaskRow';

const Section = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  minHeight: 50,
  margin: 5,
  backgroundColor: 'white'
})

const BacklogSection = ({ group, sections, moveTask, openDialog }) => {
  const [hidden, setHidden] = useState(false);

  const handleArrowClick = () => {
    setHidden(!hidden);
  }

  return (
    <>
      <Header group={group} hidden={hidden} handleArrowClick={handleArrowClick} />
      <Section
        style={hidden ? { minHeight: 0 } : {}}
      >
        {!hidden && group.tasks.map(task =>
          <TaskRow task={task} />
        )}
      </Section>
    </>
  )
}

export default BacklogSection