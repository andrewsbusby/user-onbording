
import './App.css';
import React, { useState } from 'react';
import Form from './components/From';
import axios from 'axios';
import * as Yup from 'yup';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialErrorValues ={
  username: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialUsers = [];
const initialDisable = true;


function App() {

const [user, setUser] = useState(initialUsers);
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] =useState(initialErrorValues);
const [disabled, setDisabled] = useState(initialDisable);

axios
  .get('https://reqres.in/api/users')
  .then((res) => {
    setUser(res.data.data);
  })
  .catch(err =>{

    console.log(err);
  })

  return (
    <div className="App">
     <Form 
      values={formValues}
      // change={inputChange}
      // submit={formSubmit}
      disabled={disabled}
      errors ={formErrors}
     />
    </div>
  );
}

export default App;
