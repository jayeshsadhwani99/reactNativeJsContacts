import React from 'react';
import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  setForm,
  form,
  onSubmit,
  toggleValueChange,
  sheetRef,
  openSheet,
  onFileSelected,
  localFile,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          aidth={150}
          height={150}
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose Image</Text>
        </TouchableOpacity>

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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17}}>Add to Favorites</Text>
          <Switch
            trackColor={{false: 'blue', true: colors.primary}}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>

        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>

      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
};

export default CreateContactComponent;
