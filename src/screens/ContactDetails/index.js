import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/core';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';

const ContactDetails = () => {
  const {params: {item = {}} = {}} = useRoute();
  return <ContactDetailsComponent contact={item} />;
};

export default ContactDetails;
