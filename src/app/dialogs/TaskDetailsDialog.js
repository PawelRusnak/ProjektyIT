import React, { useEffect, useState } from 'react';
import { Dialog } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledDialog = styled(Dialog)({

});

const TaskDetailsDialog = ({ taskId, ...props }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [])



  return (
    <StyledDialog
      open={taskId}
      {...props}
    >
      {loading ?
        '...' :
        'loaded data'}
    </StyledDialog>
  );
}

export default TaskDetailsDialog;