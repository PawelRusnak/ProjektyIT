import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import EditableField from './EditableField';

const Content = styled('div')({
  width: '60vw',
  maxHeight: '80%',
  display: 'flex',
  flexDirection: 'column',
  padding: 10,
});

const HeadLine = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  color: '#8c8c8c',
  marginBottom: 15
});

const Buttons = styled('div')({

});

const Main = styled('div')({
  display: 'flex',
  overflowY: 'auto',
});

const Title = styled('div')({
  fontWeight: '600',
  fontSize: 20,
});

const Details = styled('div')({
  width: '100%',
  marginRight: 20
});

const Info = styled('div')({
  width: '50%',
});

const SubHeader = styled('div')({
  fontWeight: 600,
  margin: 5
})

const SubSection = styled('div')({
  marginBottom: 35,
});

const Comments = styled('div')({

});

const History = styled('div')({

});

const Status = styled('div')({

});

const TaskView = () => {
  const [task, setTask] = useState({
    name: 'TITLE',
    description: 'Opis jakiś',
    criteria: 'jakies coś'
  });

  const handleValueChange = (value, name) => {
    setTask({ ...task, [name]: value })
  };

  return (
    <Content>
      <HeadLine>
        task id / parent id
        <Buttons>
          X
        </Buttons>
      </HeadLine>
      <Main>
        <Details>
          <Title>
            <EditableField onChange={handleValueChange} name={'name'}>
              {task.name}
            </EditableField>
          </Title>
          <SubSection>
            <SubHeader>Opis</SubHeader>
            <EditableField multiline onChange={handleValueChange} name={'description'}>
              {task.description}
            </EditableField>
          </SubSection>
          <SubSection>
            <SubHeader>Kryteria akceptacji</SubHeader>
            <EditableField onChange={handleValueChange} name={'criteria'}>
              {task.criteria}
            </EditableField>
          </SubSection>
          <SubSection>
            <SubHeader>Załączniki</SubHeader>
            brak
          </SubSection>
          <Comments>
            comments
          </Comments>
          <History>
            history
          </History>
        </Details>
        <Info>
          <Status>
            ready
          </Status>
          <SubSection>
            <SubHeader>Priorytet</SubHeader>
            3 (medium)
          </SubSection>
          <SubSection>
            <SubHeader>Przypisana osoba</SubHeader>
            Paweł
          </SubSection>
          <SubSection>
            <SubHeader>Osoba zgłaszająca</SubHeader>
            Jan
          </SubSection>
        </Info>
      </Main>
    </Content>
  )
}

export default TaskView