import React from 'react';
import {useState} from 'react';
import RegisterComponent from '../../components/Register';
import envs from '../../config/env';
import axiosInstance from '../../helpers/axiosInterceptor';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {BACKEND_URL} = envs;

  React.useEffect(() => {
    axiosInstance.post('/contacts').catch(error => {
      console.error(error);
    });
  }, []);

  console.log(BACKEND_URL);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'Password Must be more than 5 characters.',
            };
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This Field is Required'};
      });
    }
  };

  const onSubmit = () => {
    // Validations
    console.log(form);
    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Please provide a Username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please provide a First Name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please provide a Last Name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please provide an Email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please provide a Password'};
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
