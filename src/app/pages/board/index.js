import React, { useEffect } from 'react'
import StorySection from './StorySection'
import { styled } from '@material-ui/core/styles';
import { DndProvider } from 'react-dnd';
import dndBackend from 'react-dnd-html5-backend';
import TaskDetailsDialog from '../../dialogs/TaskDetailsDialog';
import TasksApiClient from '../../../api/TasksApiClient'
import HeadLine from './HeadLine';

const TasksApi = new TasksApiClient();

const sections = [
  { label: 'Do zrobienia', order: '1' },
  { label: 'W toku', order: '2' },
  { label: 'Wstrzymane', order: '3' },
  { label: 'Code Review', order: '4' },
  { label: 'Testowanie', order: '5' },
  { label: 'Zamknięte', order: '6' }];
let tasksMock = [{
  id: 'PA-1',
  name: 'Dodać mapę na widok główny',
  status: 'W toku',
  type: 'story',
  subtasks: [
    {
      id: 'PA-2',
      name: 'Przeprowadzić research popularnych bibliotek',
      estimate: '8',
      logged: '8',
      osoba: 'Paweł Rusnak',
      prio: '5',
      status: '6',
    },
    {
      id: 'PA-3',
      name: 'Zaiplementować autoryzację klucza API',
      estimate: '5',
      logged: '1',
      osoba: 'Paweł Rusnak',
      prio: '2',
      status: '2',
    },
    {
      id: 'PA-14',
      name: 'Pobrać dane konfiguracji z API',
      estimate: '10',
      logged: '3',
      osoba: 'Paweł Rusnak',
      prio: '3',
      status: '3',
    },
    {
      id: 'PA-16',
      name: 'Utworzyć odpowiednie endpointy',
      estimate: '15',
      logged: '3',
      osoba: 'Jan Kowalski',
      prio: '1',
      status: '2',
    },
    {
      id: 'PA-15',
      name: 'Nie można przybliżyć widoku mapy',
      estimate: '5',
      logged: '0',
      osoba: 'brak',
      prio: '4',
      status: '1',
    },
  ]
},
{
  id: 'PA-4',
  name: 'Wysyłanie powiadomień w czasie rzeczywistym',
  status: 'Testowanie',
  type: 'story',
  subtasks: [
    {
      id: 'PA-5',
      name: 'Zaimplementować mechanizm po stronie serwera',
      estimate: '25',
      logged: '22',
      osoba: 'Jan Nowak',
      prio: '2',
      status: '5',
    },
    {
      id: 'Pa-6',
      name: 'Odebrać dane i przedstawić użytkownikowi',
      estimate: '15',
      logged: '14',
      osoba: 'Paweł Rusnak',
      prio: '2',
      status: '5',
    },
    {
      id: 'Pa-7',
      name: 'Zbudować strukturę do przechowywania historii powiadomień',
      estimate: '5',
      logged: '3',
      osoba: 'Jan Kowalski',
      prio: '1',
      status: '6',
    },
  ]
},
{
  id: 'PA-8',
  name: 'Dodać możliwość zmiany hasła',
  status: 'Zamknięte',
  type: 'story',
  subtasks: [
    {
      id: 'PA-9',
      name: 'Utworzyć odpowiednią formatkę',
      estimate: '5',
      logged: '5',
      osoba: 'Paweł Rusnak',
      prio: '5',
      status: '6',
    },
    {
      id: 'PA-10',
      name: 'Przygotować endpoint',
      estimate: '10',
      logged: '10',
      osoba: 'Jan Kowalski',
      prio: '5',
      status: '6',
    },
  ]
}]

const Board = () => {
  const [tasks, setTasks] = React.useState(tasksMock);
  const [taskId, setTaskId] = React.useState();
  const [filters, setFilters] = React.useState();

  const onChange = (e) => {
    setFilters(e.target.value);
  }

  const filter = (tasks) => {
    const filter = filters.toLowerCase();
    return tasks.filter(task => task.name.toLowerCase().includes(filter) || task.osoba.toLowerCase().includes(filter) || task.id.toLowerCase().includes(filter));
  }

  useEffect(() => {
    TasksApi.getTasks().then(response => {
      //console.log(response);
    })
  }, [])

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
        <HeadLine sections={sections} title={'Sprint 5'} filters={filters} setFilters={onChange} endSprint />
        {tasks.sort(compare).map(task => {
          const filteredTasks = !!filters ? filter(task.subtasks) : task.subtasks;
          return <StorySection task={{ ...task, subtasks: filteredTasks }} sections={sections} moveTask={moveTask} openDialog={setTaskId} />
        }
        )}
      </DndProvider>
      <TaskDetailsDialog taskId={taskId} onClose={closeDialog} />
    </>
  )
}

export default Board