import React from 'react'
import HeadLine from './../board/HeadLine';
import BacklogSection from './BacklogSection';

const groups = [{
  title: "Sprint 1",
  tasks: [{ name: 'test' }, { name: 'test2' }],
}, {
  title: "Planned",
  tasks: [{ name: 'test3' }, { name: 'test4' }],
}]

const Backlog = () => {
  return (
    <>
      <HeadLine />
      {groups.map(group =>
        <BacklogSection group={group}>

        </BacklogSection>
      )}
    </>
  )
}

export default Backlog