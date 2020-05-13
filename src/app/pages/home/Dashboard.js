import React, { useState, useEffect } from 'react';
import NavBar from '../../layout/NavBar';
import { styled } from '@material-ui/core/styles';
import { Paper, Dialog, TextField, DialogTitle, DialogContentText, DialogContent, DialogActions } from '@material-ui/core';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TurnedInNot from '@material-ui/icons/TurnedInNot';
import Group from '@material-ui/icons/Group';
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
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const [teamDialogOpen, setTeamDialogOpen] = useState(false);
  const [userDialogOpen, setUserDialogOpen] = useState(false);
  const [projects, setProjects] = useState();
  const [projectData, setProjectData] = useState();
  const [teams, setTeams] = useState([{ name: 'Alfa' }, { name: 'Beta' }]);
  const [teamData, setTeamData] = useState();

  useEffect(() => {
    GeneralApi.getProjects().then(response => {
      setProjects(response.data.projects);
    })
  }, [])

  const toggleProjectDialog = () => {
    setProjectDialogOpen(!projectDialogOpen);
    setProjectData();
  }
  const toggleTeamDialog = () => {
    setTeamDialogOpen(!teamDialogOpen);
    setTeamData();
  }
  const toggleUserDialog = () => {
    setUserDialogOpen(!userDialogOpen);
  }

  const handleProjectDataChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };
  const handleTeamDataChange = (e) => {
    setTeamData({ ...teamData, [e.target.name]: e.target.value });
  };

  const addProject = () => {
    setProjects([...projects, projectData]);
    toggleProjectDialog();
  };

  const addTeam = () => {
    setTeams([...teams, teamData])
    toggleTeamDialog();
  }

  return (
    <>
      <NavBar />
      <Content>
        <Component style={{ width: '50%' }} elevation={3}>
          <Title>
            <span>Twoje Projekty</span>
            {sessionStorage.getItem('user') === 'admin' && <Button onClick={toggleProjectDialog}>Utwórz</Button>}
          </Title>
          {projects && projects.map((project, index) => (
            <List comopnent='nav' key={index}>
              <Link to={project.url}>
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
      {sessionStorage.getItem('user') === 'admin' &&
        <> <Content>
          <Component style={{ width: '50%' }} elevation={3} >
            <Title><span>Zespoły</span><Button onClick={toggleTeamDialog}>Utwórz</Button></Title>
            <List>

              {teams && teams.map((team, index) => (
                <ListItem>
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText>{team.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Component>
          <Component elevation={3} >
            <Title>Ostatnie aktualizacje</Title>
          Brak
        </Component>
        </Content>
          <Button style={{ marginLeft: 30 }} variant={'outlined'} onClick={toggleUserDialog}>Nowy użytkownik</Button></>
      }

      <Dialog
        open={projectDialogOpen}
        onClose={toggleProjectDialog}
      >
        <DialogTitle>Utwórz projekt</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Nazwa projektu"
            name={'name'}
            value={projectData?.name}
            onChange={handleProjectDataChange}
            fullWidth
          />
          <TextField
            label="Skrót"
            name={'shortName'}
            value={projectData?.shortName}
            onChange={handleProjectDataChange}
            fullWidth
          />
          <TextField
            label="Przypisany zespół"
            name={'team'}
            value={projectData?.team}
            onChange={handleProjectDataChange}
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={addProject} color="primary">
            Potwierdź
          </Button>
          <Button onClick={toggleProjectDialog} color="primary">
            Anuluj
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={teamDialogOpen}
        onClose={toggleTeamDialog}
      >
        <DialogTitle>Utwórz zespół</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Nazwa zespołu"
            name={'name'}
            value={teamData?.name}
            onChange={handleTeamDataChange}
            fullWidth
          />
          <TextField
            label="Leader"
            name={'leader'}
            value={teamData?.team}
            onChange={handleTeamDataChange}
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={addTeam} color="primary">
            Potwierdź
          </Button>
          <Button onClick={toggleTeamDialog} color="primary">
            Anuluj
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={userDialogOpen}
        onClose={toggleUserDialog}
      >
        <DialogTitle>Dodaj użytkownika</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Imię"
            fullWidth
          />
          <TextField
            label="Nazwisko"
            fullWidth
          />
          <TextField
            label="E-mail"
            fullWidth
          />
          <TextField
            label="Stanowisko"
            fullWidth
          />
          <TextField
            label="Stawka"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleUserDialog} color="primary">
            Dodaj
          </Button>
          <Button onClick={toggleUserDialog} color="primary">
            Anuluj
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Dashboard;
