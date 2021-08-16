import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import styles from './styles';

const ImagePicker = React.forwardRef(({}, ref) => {
  const options = [
    {
      name: 'Take a photo',
      icon: <Icon name="camera" color={colors.grey} size={21} />,
      onPress: () => {},
    },
    {
      name: 'Choose From Gallery',
      icon: <Icon name="image" color={colors.grey} size={21} />,
      onPress: () => {},
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={300}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      {options.map(({name, onPress, icon}) => (
        <View style={styles.optionsWrapper}>
          <TouchableOpacity style={styles.pickerOption} key={name}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </RBSheet>
  );
});

export default ImagePicker;
