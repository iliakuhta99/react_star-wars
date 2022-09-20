import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PeoplePage from '../PeoplePage'
import HomePage from '../HomePage'
import Header from '@components/Header'
import routesConfig from '@routes/routesConfig';

import styles from './App.module.css';



const App = () => {
  return (
    <>
      <Router>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => (
              < Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
