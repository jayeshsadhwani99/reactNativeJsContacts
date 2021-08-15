import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants';

const CreateContactComponent = () => {
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

        <Input label="First Name" placeholder="Enter First Name" />
        <Input label="Last Name" placeholder="Enter Last Name" />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withEmoji
              onSelect={() => {}}
              visible
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          label="Phone Number"
          placeholder="Enter Phone Number"
        />

        <CustomButton primary title="Submit" />
      </Container>
    </View>
  );
};

export default CreateContactComponent;
