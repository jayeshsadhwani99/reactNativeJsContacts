import React, {useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {GlobalContext} from '../../context/Provider';
import logout from '../../context/actions/auth/logout';

const Logout = () => {
  const {authDispatch} = useContext(GlobalContext);

  useEffect(() => {
    logout()(authDispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <ActivityIndicator />;
};

export default Logout;
