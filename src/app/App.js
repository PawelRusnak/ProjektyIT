import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import T from 'i18n-react';

import MainRouter from '../router/MainRouter';
// import translationsEN from './localization/translations/en.json';
// import translationsDE from './localization/translations/de.json';

// const mergedDEtranslations = Object.assign({}, translationsEN, translationsDE);

// T.setTexts((localStorage.getItem('userLanguage') || 'en') === 'en' ? translationsEN : mergedDEtranslations);

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
