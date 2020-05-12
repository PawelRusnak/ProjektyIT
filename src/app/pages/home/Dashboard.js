import React, { useState, useEffect } from 'react';
import NavBar from '../../layout/NavBar';
import { styled } from '@material-ui/core/styles';
import { Paper, Dialog, TextField, DialogTitle, DialogContentText, DialogContent, DialogActions } from '@material-ui/core';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TurnedInNot from '@material-ui/icons/TurnedInNot';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import GeneralApiClient from '../../../api/GeneralApiClient';

const GeneralApi = new GeneralApiClient();

const Content = styled('div')({
  margin: 20,
  marginTop: 80,
  display: 'flex',
});

const Component = styled(Paper)({
  margin: 10,
  width: '100%',
  height: 'fit-content',
  minHeight: 150,
});

const Title = styled('div')({
  margin: 10,
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Dashboard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [projects, setProjects] = useState();
  const [projectData, setProjectData] = useState();

  useEffect(() => {
    GeneralApi.getProjects().then(response => {
      setProjects(response.data.projects);
    })
  }, [])

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
    setProjectData();
  }

  const handleDataChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const addProject = () => {
    console.log(projectData);
    setProjects([...projects, projectData]);
    toggleDialog();
  };

  return (
    <>
      <NavBar />
      <Content>
        <Component style={{ width: '50%' }} elevation={3}>
          <Title>
            <span>Twoje Projekty</span>
            <Button onClick={toggleDialog}>Utwórz</Button>
          </Title>
          {console.log(projects)}
          {projects && projects.map((project, index) => (
            <List comopnent='nav' key={index}>
              <Link to={project.link}>
                <ListItem button>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <ListItemText primary={`(${project.shortName}) - ${project.name}`} />
                </ListItem>
              </Link>
            </List>
          ))}
        </Component>

        <Component elevation={3}>
          <Title>Przypisane zadania</Title>
          Brak zadań
        </Component>
      </Content>

      <Dialog
        open={dialogOpen}
        onClose={toggleDialog}
      >
        <DialogTitle>Utwórz projekt</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Nazwa projektu"
            name={'name'}
            value={projectData?.name}
            onChange={handleDataChange}
            fullWidth
          />
          <TextField
            label="Skrót"
            name={'shortName'}
            value={projectData?.shortName}
            onChange={handleDataChange}
            fullWidth
          />
          <TextField
            label="Przypisany zespół"
            name={'team'}
            value={projectData?.team}
            onChange={handleDataChange}
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={addProject} color="primary">
            Potwierdź
          </Button>
          <Button onClick={toggleDialog} color="primary">
            Anuluj
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Dashboard;
