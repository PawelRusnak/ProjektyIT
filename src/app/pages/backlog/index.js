import React from 'react'
import HeadLine from './../board/HeadLine';
import BacklogSection from './BacklogSection';
import { Button } from '@material-ui/core';

const groups = [{
  title: "Sprint 1",
  tasks: [{
    id: 'PA-1',
    name: 'Zbudować podstawę aplikacji',
    status: 'Zakończone',
    left: '0',
  }],
}, {
  title: "Sprint 2",
  tasks: []
}, {
  title: "Sprint 3",
  tasks: []
}, {
  title: "Sprint 4",
  tasks: []
}, {
  title: "Sprint 5 (obecny)",
  tasks: [
    {
      id: 'PA-4',
      name: 'Widok mapy',
      status: 'W toku',
      left: '15',
    },
    {
      id: 'PA-5',
      name: 'Wysyłanie powiadomień w czasie rzeczywistym',
      status: 'Testowanie',
      left: '2',
    }],
},
{
  title: "Planned",
  tasks: [{
    id: 'PA-8',
    name: 'Wdrożyć aplikację na środowisko produkcyjne',
    status: 'Do zrobienia',
    left: '30',
  }],
}]

const Backlog = () => {
  return (
    <>
      <HeadLine title={'Backlog'} />
      {groups.map(group =>
        <BacklogSection group={group} />
      )}
      <Button variant='outlined'>Dodaj zadanie</Button>
    </>
  )
}

export default Backlog