
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

const formSchema = Yup.object().shape({
  username: Yup
    .string()
    .required('Required'),
  email: Yup
    .string()
    .email('Must be a valid email')
    .max(42)
    .required('Email is required'),
  password: Yup
    .string()
    .min(8)
    .max(10)
    .required('Password is required'),
  termsOfService: Yup
    .boolean()
    .oneOf( [true], 'You must agree to the terms of service to continue'),
});

function App() {

const [user, setUser] = useState(initialUsers);
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] =useState(initialErrorValues);
const [disabled, setDisabled] = useState(initialDisable);

const getUsers = () => {
axios
  .get('https://reqres.in/api/users')
  .then((res) => {
    setUser(res.data.data);
  })
  .catch(err =>{

    console.log(err);
  })
};

const postNewUser = newUser => {
  axios
  .post('https://reqres.in/api/users', newUser)
  .then((res)=>{
    setUsers([...users, res.data.data])
  })
  .catch((err)=> {
    console.log(err);
  })
}

const inputChange = newUser => {
  Yup
    .reach( formSchema, name)
    .validate (value)
    .then( valid => {
      setFormErrors( {...formErrors, [name]: "",});
    })
    .catch( err => {
      setFormErrors( {...formErrors, [name] : ''})
    })
}

  return (
    <div className="App">
     <Form 
      user={user}
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
