import { router, useRouter } from 'expo-router';
import React from 'react';
import styled from 'styled-components/native';
import { useForm, Controller } from 'react-hook-form';
import {
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { InputField, Link } from '@/components';

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

const ImageContainer = styled(Image)`
  width: 300px;
  height: 200px;
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

export default function Index() {
  const { control,handleSubmit,formState: { errors } } = useForm({
    defaultValues: {
      email: 'felix@gmail.com',
      password: 'contrA|123'
    }
  });
  const router = useRouter();
  const onLogin = ( data: User ) => {
    router.replace('/(app)');
  }

  return (
    <MainContainer>
      <ImageContainer
        source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }}
        alt='Chamaleon Photo'
      />

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
              placeholder: "Type your password",
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

      <Button onPress={ handleSubmit(onLogin) }>
        <StyText>
          Log In
        </StyText>
      </Button>

      <Link label='Go to' route='register' />
    </MainContainer>
  );
}
