import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Pressable } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { InputField, Link } from '@/components';
import { router } from 'expo-router';

interface User {
  email: string;
  password: string;
}

const MainContainer = styled(View)`
  flex: 1;
  gap: 45px;

  justify-content: center;
  align-items: center;

  background-color: #F5FCFF;
`

const Button = styled(Pressable)`
  width: 200px;
  height: 50px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  background-color: lightblue;
`

const StyText = styled(Text)`
  font-size: 18px;
  color: #000;
`

export default function Register() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      cPassword: '',
    }
  });

  const onRegister = ( data: User ) => {
    alert(`Usuario registrado: ${ data.email }`);
    router.replace('/');
  }

  return (
    <MainContainer>
      <Controller
        control={ control }
        rules={{
          required: {
            message: 'This field is required',
            value: true
          },
          pattern: {
            message: 'Type a valid email',
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField
            label='Email'
            inputProps={{
              placeholder:"Type your email",
              onBlur: onBlur,
              onChangeText: onChange,
              value: value
            }}
            error={ errors.email?.message }
          />
        )}
        name='email'
      />

      <Controller
        control={ control }
        rules={{
          required: {
            message: 'This field is required',
            value: true
          },
          minLength: {
            message: 'Min length is 8',
            value: 8
          },
          validate: {
            hasUpperLower: value =>
              /^(?=.*[a-z])(?=.*[A-Z])/.test(value) || 'At least one lowercase and one uppercase letter',
            hasSpecialChar: value =>
              /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'At least one special character',
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField
            label='Password'
            inputProps={{
              placeholder: "Create a password",
              onBlur: onBlur,
              onChangeText: onChange,
              value: value
            }}
            isPassword
            error={ errors.password?.message }
          />
        )}
        name='password'
      />

      <Controller
        control={ control }
        rules={{
          validate: (val: string) => {
            if (watch('password') != val) {
              return 'The passwords do not match'
            }
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField
            label='Confirm password'
            inputProps={{
              placeholder: "Confirm the password",
              onBlur: onBlur,
              onChangeText: onChange,
              value: value
            }}
            isPassword
            error={ errors.cPassword?.message }
          />
        )}
        name='cPassword'
      />

      <Button onPress={ handleSubmit(onRegister) }>
        <StyText>
          Log In
        </StyText>
      </Button>

      <Link label='Go to' route='' />
    </MainContainer>
  );
}
