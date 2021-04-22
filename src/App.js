
import './App.css';
import React, { useEffect, useState } from 'react';
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
    setUser([...user, res.data.data])
  })
  .catch((err)=> {
    console.log(err);
  })
}

// const inputChange = newUser => {
//   Yup
//     .reach( formSchema, data)
//     .validate (value)
//     .then( valid => {
//       setFormErrors( {...formErrors, [data]: "",});
//     })
//     .catch( err => {
//       setFormErrors( {...formErrors, [data] : err.errors[0],
//       })
//     })
//     setFormValues( {...formValues, [data]: value})
// };
const formSubmit =() =>{
  const newUser = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    password: formValues.password,
    termsOfService: formValues.termsOfService,
  }

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
