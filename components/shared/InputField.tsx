// Libraries
import React from 'react';
import styled from 'styled-components/native';

// Components
import {
  View,
  Text,
  TextInput,
  TextInputProps
} from 'react-native';

interface Props {
  label: string;
  error?: string;
  isPassword?: boolean;
  inputProps: TextInputProps;
}

const Field = styled(View)`
  gap: 15px;
`

const Input = styled(TextInput)`
  width: 300px;
  height: 50px;
  font-size: 18px;
  padding-left: 10px;

  placeholder-text-color: #afafaf;
  color: #000;

  border: 1px solid #000;
  border-radius: 10px;
`

const StyText = styled(Text)`
  font-size: 18px;
  color: #000;
`

const ErrorMessage = styled(StyText)`
  font-size: 16px;
  margin-left: 10px;
  max-width: 290px;

  color: red;
`

export default function InputField({
  label,
  error,
  isPassword,
  inputProps
}: Props ) {
  return (
    <Field>
      <StyText>
        { label }
      </StyText>

      <Input
        {...inputProps}
        secureTextEntry={ isPassword }
      />

      { error && <ErrorMessage>{ error }</ErrorMessage> }
    </Field>
  );
}
