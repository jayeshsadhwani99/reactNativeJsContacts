import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Message from '../common/Message';

const RegisterComponent = ({onSubmit, onChange, errors, error, loading}) => {
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
          {error?.error && (
            <Message danger onDismiss={() => {}} message={error?.error} />
          )}

          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            error={errors.username || error?.username?.[0]}
          />

          <Input
            label="First Name"
            placeholder="Enter Fisrt Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />

          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email || error?.email?.[0]}
          />

          <Input
            label="Password"
            icon={<Text>HIDE</Text>}
            secureTextEntry={true}
            iconPosition="right"
            placeholder="Enter Password"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password || error?.password?.[0]}
          />

          <CustomButton
            loading={loading}
            disabled={loading}
            primary
            title="Submit"
            onPress={onSubmit}
          />

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
