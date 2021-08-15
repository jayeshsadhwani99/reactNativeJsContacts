import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import Message from '../common/Message';
import Icon from '../common/Icon';
import styles from './styles';

const ContactsComponent = ({modalVisible, setModalVisible, data, loading}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No Contacts To Show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log(item);

    const {contact_picture, first_name, last_name, phone_number} = item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
              }}></View>
          )}

          <View style={{flexDirection: 'row'}}>
            <Text>{first_name}</Text>
            <Text>{last_name}</Text>
          </View>

          <Text>{phone_number}</Text>
        </View>
        <Icon name="right" type="ant" />
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

      {loading && (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      )}

      {!loading && (
        <View style={[{paddingVertical: 20}]}>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height: 100}} />}
          />
        </View>
      )}
    </View>
  );
};

export default ContactsComponent;
