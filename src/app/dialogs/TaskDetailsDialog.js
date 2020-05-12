import React, { useEffect, useState } from 'react';
import { Dialog } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import TaskView from '../pages/task/TaskView';


const TaskDetailsDialog = ({ taskId, ...props }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [])



  return (
    <Dialog
      maxWidth={''}
      open={taskId}
      {...props}
    >
      {loading ?
        '...' :
        <TaskView />}
    </Dialog>
  );
}

export default TaskDetailsDialog;