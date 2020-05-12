import React from 'react';
import { styled } from '@material-ui/core/styles';

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

const HeadLine = ({ sections }) => {
  return (
    <Header>
      <div>Sprint 2103123 ----- pozostało X dni</div>
      <div>Jakiś filter tutaj</div>
      {sections && <Section>
        {sections.map(section =>
          <Column>{section}</Column>
        )}
      </Section>}
    </Header>
  )
};

export default HeadLine;