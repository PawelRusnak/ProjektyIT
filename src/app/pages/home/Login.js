import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const Container = styled(Card)({
  position: 'absolute',
  alignSelf: 'center',
  left: '40%',
});

const Input = styled(TextField)({
  width: '100%'
})

const ButtonStyled = styled(Button)({
  flex: 'auto',
})

const Background = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#dedede',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
})

const Login = ({ history }) => {
  const [state, setState] = useState();

  const login = () => {
    sessionStorage.setItem('user', state.login);
    history.push('/dashboard')
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <Background>
      <Container>
        <CardContent>
          <Typography color="textSecondary">
            Logowanie
        </Typography>
          <Input
            name='login'
            onChange={handleChange}
            label='Login'
          />
          <Input
            name='password'
            type='password'
            label='Hasło'
          />
        </CardContent>
        <CardActions>
          <ButtonStyled
            onClick={login}
            disabled={!state?.login && !state?.password}
          >
            Zaloguj
            </ButtonStyled>
        </CardActions>
      </Container >
    </Background>
  );
}

export default withRouter(Login);
