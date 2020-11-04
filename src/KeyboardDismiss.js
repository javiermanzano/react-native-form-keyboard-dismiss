import React from 'react'
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
    onPress={() => {
      if (Platform.OS === 'ios') {
        Keyboard.dismiss();
      }
    }}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
