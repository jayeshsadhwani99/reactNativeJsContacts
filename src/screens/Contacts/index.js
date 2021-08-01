import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import Icon from '../../components/common/Icon';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" size={25} style={{padding: 10}} name="menu" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Text>Hi From Contacts</Text>
    </Container>
  );
};

export default Contacts;
