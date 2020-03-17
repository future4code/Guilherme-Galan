import React, { Fragment } from 'react';
import  './App.css'
import Header from './components/Header/Header';
import Task from './components/Task.js/Task';


function App() {
  return (
    <Fragment>
      <Header />
      <Task />      
    </Fragment>
  );
}

export default App;