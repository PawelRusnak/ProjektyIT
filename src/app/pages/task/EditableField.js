import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const EditField = styled('div')({
  borderRadius: 5,
  padding: 5,
  '&:hover': {
    backgroundColor: '#ebecf0',
  }
})

const EditableField = ({ children, multiline, onChange, name }) => {
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  }

  const handleUpdate = () => {
    setEditMode(false)
  }

  return (
    !editMode ? (
      <EditField
        style={multiline ? { whiteSpace: 'pre' } : {}}
        onClick={handleEditClick}
      >
        {children}
      </EditField>
    ) : (
        <TextField
          autoFocus onBlur={handleUpdate}
          style={{ padding: 5 }}
          multiline={multiline}
          value={children}
          onChange={e => onChange(e.target.value, name)}
        >
        </TextField>
      )
  )
}

export default EditableField;