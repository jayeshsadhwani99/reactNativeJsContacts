import React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import LoginComponent from '../../components/Login';
import login from '../../context/actions/auth/login';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);
  const [text, onChangeText] = React.useState('');

  const onSubmit = () => {
    if (form.username && form.password) {
      login(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
