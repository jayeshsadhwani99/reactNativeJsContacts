import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AppModal from '../common/AppModal';
import {Message} from '../common/Message';

const ContactsComponent = ({modalVisible, setModalVisible, data}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No Contacts To Show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log(item);

    return (
      <TouchableOpacity>
        <Text>Contact</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <AppModal
        setModalVisible={setModalVisible}
        visible={modalVisible}
        title="My Profile"
        modalBody={
          <View>
            <Text>Modal Body</Text>
          </View>
        }
      />

      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default ContactsComponent;
