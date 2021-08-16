import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants';

const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  setForm,
  form,
  onSubmit,
}) => {
  console.log('error>>>>', error);
  return (
    <View style={styles.container}>
      <Container>
        <Image
          aidth={150}
          height={150}
          source={{uri: DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <Text style={styles.chooseText}>Choose Image</Text>

        <Input
          onChangeText={value => {
            onChangeText({name: 'firstName', value: value});
          }}
          label="First Name"
          placeholder="Enter First Name"
          error={error?.first_name?.[0]}
        />
        <Input
          onChangeText={value => {
            onChangeText({name: 'lastName', value: value});
          }}
          label="Last Name"
          placeholder="Enter Last Name"
          error={error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, phoneCode, countryCode: cCode});
              }}
              visible
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
          label="Phone Number"
          placeholder="Enter Phone Number"
          error={error?.phone_number?.[0]}
        />

        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>
    </View>
  );
};

export default CreateContactComponent;
