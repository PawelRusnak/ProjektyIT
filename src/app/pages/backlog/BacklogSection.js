import React from 'react';
import TaskRow from './TaskRow';

const BacklogSection = ({ group }) => {
  return (
    <div>
      title
      {group.tasks.map(task => <TaskRow task={task} />)}
    </div>
  )
}

export default BacklogSection;