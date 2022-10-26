import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ResourceCal from './components/Resource';
import RenderCount from './components/UseEffectExample';
import UseMemoExample from './components/UseMemoExample';
import { HomePage } from './components/HomePage';
import {Routes, Route } from 'react-router-dom'
import { ComplainForm } from './components/ComplainForm';

function App() {
  return (
    <div className="App">
      <Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
      {/* <ResourceCal />
      <RenderCount />
      <UseMemoExample /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/register-complaint" element={<ComplainForm />} />
        <Route path="/schedule-repair" element={<ComplainForm />} />
      </Routes>
    </div>
  );
}

export default App;
