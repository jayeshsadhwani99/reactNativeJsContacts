import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const RegisterComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to JSContacts</Text>
        <Text style={styles.subtitle}>Create a Free Account</Text>

        <View style={styles.form}>
          <Input label="Username" placeholder="Enter Username" />

          <Input label="First Name" placeholder="Enter Fisrt Name" />

          <Input label="Last Name" placeholder="Enter Last Name" />

          <Input label="Email" placeholder="Enter Email" />

          <Input
            label="Password"
            icon={<Text>HIDE</Text>}
            secureTextEntry={true}
            iconPosition="right"
            placeholder="Enter Password"
          />

          <CustomButton primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an Account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
