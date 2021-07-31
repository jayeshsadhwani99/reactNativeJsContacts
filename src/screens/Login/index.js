import React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';

const Login = () => {
  const [text, onChangeText] = useState('');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={value => onChangeText(value)}
        value={text}
      />

      <Input
        label="Password"
        onChangeText={value => onChangeText(value)}
        value={text}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />

      <CustomButton primary title="Submit" />
    </Container>
  );
};

export default Login;
