import * as yup from 'yup';

const Schema = yup.object().shape({
    username: yup
        .string()
        .required('User Name is Required'),
    email: yup
        .string()
        .email('must be a valid email')
        .max(50)
        .required('Email is required'),
    password: yup
        .string()
        .min(8)
        .max(30)
        .required('Password is required'),
    termsOfService: yup
        .boolean()
        .oneOf([true], 'You must agree to continue'),
        
})

export default Schema