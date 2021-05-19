import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './components/form';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValue = {
  username: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialErrorValue = {
  username: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialUser = [];
const initialDiable = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
