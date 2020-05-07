import React from 'react'
import StorySection from './StorySection'
import { styled } from '@material-ui/core/styles';
import { DndProvider } from 'react-dnd';
import dndBackend from 'react-dnd-html5-backend';
import TaskDetailsDialog from '../../dialogs/TaskDetailsDialog';

const sections = ['todo', 'progress', 'testing', 'done'];
let tasksMock = [{
  id: 'task-1',
  name: 'test story n1',
  status: 'testing',
  type: 'story',
  subtasks: [
    {
      id: 'task-1234',
      name: 'test123',
      estimate: '5',
      logged: '3',
      osoba: 'paweł',
      prio: '1',
      status: 'done',
    },
    {
      id: 'task-2234',
      name: 'test123',
      estimate: '5',
      logged: '3',
      osoba: 'paweł',
      prio: '1',
      status: 'testing',
    },
    {
      id: 'task-3234',
      name: 'test123',
      estimate: '5',
      logged: '3',
      osoba: 'paweł',
      prio: '1',
      status: 'done',
    },
  ]
},
{
  id: 'task-2',
  name: 'test story n2',
  status: 'done',
  type: 'story',
  subtasks: [
    {
      id: 'task-4234',
      name: 'test123',
      estimate: '5',
      logged: '3',
      osoba: 'paweł',
      prio: '1',
      status: 'done',
    },
    {
      id: 'task-5234',
      name: 'test123',
      estimate: '5',
      logged: '3',
      osoba: 'paweł',
      prio: '1',
      status: 'done',
    },
    {
      id: 'task-6234',
      name: 'test123',
      estimate: '5',
      logged: '3',
      osoba: 'paweł',
      prio: '1',
      status: 'done',
    },
  ]
}]
const Section = styled('div')({
  display: 'flex',
  alignItems: 'stretch',
  position: 'sticky',
  top: 64,
  backgroundColor: '#ffffff',
  marginTop: -24,
  paddingTop: 24,
})

const Column = styled('div')({
  display: 'flex',
  alignItems: 'stretch',
  width: '100%',
  backgroundColor: '#f4f5f7',
  margin: 5,
  lineHeight: 3,
  paddingLeft: 15,
  borderRadius: '10px 10px 0 0',
})

const Board = () => {
  const [tasks, setTasks] = React.useState(tasksMock);
  const [taskId, setTaskId] = React.useState();

  const moveTask = (parentId, taskId, newStatus) => {
    let taskParent = tasks.filter(task => task.id === parentId)[0];
    let task = taskParent.subtasks.filter(task => task.id === taskId)[0];
    task.status = newStatus;
    taskParent.subtasks = taskParent.subtasks.filter(task => task.id !== taskId).concat(task);
    setTasks(tasks.filter(task => task.id !== parentId).concat(taskParent));
  }

  const compare = (a, b) => {
    return a.id >= b.id ? 1 : -1
  }

  const closeDialog = () => {
    setTaskId();
  }

  return (
    <>
      <DndProvider backend={dndBackend}>

        <Section>
          {sections.map(section =>
            <Column>{section}</Column>
          )}
        </Section>
        {tasks.sort(compare).map(task =>
          <StorySection task={task} sections={sections} moveTask={moveTask} openDialog={setTaskId} />
        )}
      </DndProvider>
      <TaskDetailsDialog taskId={taskId} onClose={closeDialog} />
    </>
  )
}

export default Board