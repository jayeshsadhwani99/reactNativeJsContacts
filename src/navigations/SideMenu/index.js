import React from 'react';
import {
  SafeAreaView,
  Alert,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Container from '../../components/common/Container';
import {SETTINGS} from '../../constants/routeNames';
import logout from '../../context/actions/auth/logout';

import styles from './styles';
import Icon from '../../components/common/Icon';

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          logout()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="fontisto" size={17} name="player-settings" />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="material" size={17} name="logout" />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />

        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
