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
  const sheetRef = React.useRef(null);
  const [form, setForm] = React.useState({});
  const {navigate} = useNavigation();
  const [localFile, setLocalFile] = React.useState(null);

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

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onFileSelected = image => {
    closeSheet();
    setLocalFile(image);
    console.log(image);
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
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;
