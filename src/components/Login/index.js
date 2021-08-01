import React from 'react';
import {Image, Text, Touchable, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {REGISTER} from '../../constants/routeNames';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Message from '../common/Message';

const LoginComponent = ({error, onChange, onSubmit, loading}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);
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
        <Text style={styles.subtitle}>Please Login Here</Text>

        <View style={styles.form}>
          {error && !error.error && (
            <Message danger onDismiss message="Invalid credentials" />
          )}
          {error?.error && <Message danger onDismiss message={error?.error} />}

          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
          />

          <Input
            label="Password"
            icon={
              <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
                <Text>{isSecureEntry ? 'SHOW' : 'HIDE'}</Text>
              </TouchableOpacity>
            }
            secureTextEntry={isSecureEntry}
            iconPosition="right"
            placeholder="Enter Password"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            disabled={loading}
            loading={loading}
            onPress={onSubmit}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new Account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
