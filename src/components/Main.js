import React from 'react';
import { Routes, HashRouter as Router , Route } from 'react-router-dom';

import { Banner } from './Banner.js';

export const Main = () => {
  return (
    <Router>
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Banner />}></Route>
      {/* <Route exact path='/professionalHistory' eleme></Route> */}
      
    </Routes>
    </Router>
  );
}

export default Main;