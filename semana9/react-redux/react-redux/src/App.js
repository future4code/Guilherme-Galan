import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Toolbar from './components/Toolbar';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>4Task</h1>
        <TaskForm />
        <TaskList />
        <Toolbar />
      </div>
    </Provider>
  );
}

export default App;
