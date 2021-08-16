import React, {useContext} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {useNavigation} from '@react-navigation/core';
import {CONTACT_LIST} from '../../constants/routeNames';

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = React.useState({});
  const {navigate} = useNavigation();

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  return (
    <CreateContactComponent
      onSubmit={onSubmit}
      setForm={setForm}
      onChangeText={onChangeText}
      toggleValueChange={toggleValueChange}
      form={form}
      loading={loading}
      error={error}
    />
  );
};

export default CreateContact;
