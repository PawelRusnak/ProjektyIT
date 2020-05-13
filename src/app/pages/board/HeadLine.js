import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button, TextField, Select, MenuItem, InputAdornment, FormControl, InputLabel } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

const Header = styled('div')({
  position: 'sticky',
  top: 64,
  backgroundColor: '#ffffff',
  marginTop: -24,
  paddingTop: 24,
});

const Section = styled('div')({
  display: 'flex',
  alignItems: 'stretch',
});

const Column = styled('div')({
  display: 'flex',
  alignItems: 'stretch',
  width: '100%',
  backgroundColor: '#f4f5f7',
  margin: 5,
  lineHeight: 3,
  paddingLeft: 15,
  borderRadius: '10px 10px 0 0',
});

const TitleRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 25,
});

const Title = styled('div')({
  fontSize: 25,
});

const Info = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Filters = styled('div')({
  paddingLeft: 15,
  paddingBottom: 15,
  display: 'flex'
});

const HeadLine = ({ sections, title, filters, setFilters, endSprint }) => {
  return (
    <Header>
      <TitleRow>
        <Title>{title}</Title>
        {endSprint && <Info>
          <div>Pozostało 7 dni</div>
          <Button>Zakończ sprint</Button>
        </Info>}
      </TitleRow>
      <Filters>
        <TextField
          label='Filtruj'
          value={filters}
          onChange={setFilters}
          InputProps={{
            endAdornment: <InputAdornment position="end"><Search /></InputAdornment>,
          }}
        />
        <FormControl style={{
          minWidth: 170,
          marginLeft: 10,
        }}>
          <InputLabel>
            Przypisana osoba
          </InputLabel>
          <Select value={filters} onChange={setFilters}>
            <MenuItem value="">
              <em>Brak</em>
            </MenuItem>
            <MenuItem value={"Paweł Rusnak"}>Paweł Rusnak</MenuItem>
            <MenuItem value={"Jan Kowalski"}>Jan Kowalski</MenuItem>
          </Select>
        </FormControl>
      </Filters>
      {sections && <Section>
        {sections.map(section =>
          <Column>{section.label}</Column>
        )}
      </Section>}
    </Header>
  )
};

export default HeadLine;