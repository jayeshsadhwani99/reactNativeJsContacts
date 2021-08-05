import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../common/AppModal';
import {CustomButton} from '../common/CustomButton';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal
        setModalVisible={setModalVisible}
        visible={modalVisible}
        modalBody={
          <View>
            <Text>Modal Body</Text>
          </View>
        }
      />

      <CustomButton
        title="Open Modal"
        secondary
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default ContactsComponent;
