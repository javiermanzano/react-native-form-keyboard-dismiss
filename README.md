# react-native-form-keyboard-dismiss

This library simple allows iOS apps to dismiss keyboard when touching outside the inputs.

It can be configured to work across platforms this way.

Just use it like this:

```
import React from 'react';
import { TextInput } from 'react-native';
import DismissKeyboard from 'react-native-form-dismiss-keyboard';

const ExampleForm = props => {

  return (
    <DismissKeyboard>
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
    </DismissKeyboard>
  );
}
