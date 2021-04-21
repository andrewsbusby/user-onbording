import React from 'react';

function Form (props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };
    return (
        <form className="form container" onSubmit={onSubmit}>
            <label>name
                <input
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onChange}
                    />
            </label>

            <label>email
                <input
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    />
            </label>
            { errors.email.length > 0 && <p className='error'>{errors.email}</p>}

            <label>Set Password
                <input
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    placeholder='8-10 characters'
                    />
            </label>
            {errors.password.length > 0 && <p className='error'>{errors.password}</p>}

            <lables>Do you agree to the Terms of Services
                <input 
                    type='checkbox'
                    name='termsOfService'
                    value={values.termsOFService}
                    onChange={onChange}
                    required
                    />
            </lables>

        </form>
    )
}

export default Form