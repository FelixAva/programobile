import { useRouter } from 'expo-router';
import React from 'react';
import styled from 'styled-components/native';
import { useForm, Controller } from 'react-hook-form';
import {
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { InputField, Link, Button } from '@/components';
import { getMobileSession } from '@/api/api-client';

interface User {
  username: string;
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

export default function Index() {
  const { control,handleSubmit,formState: { errors } } = useForm({
    defaultValues: {
      username: 'felix@gmail.com',
      password: 'contrA|123'
    }
  });
  const router = useRouter();
  const onLogin = ( data: User ) => {
    getMobileSession( 'Faag05', 'C@ricatura05' );
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
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField
            label='Username'
            inputProps={{
              placeholder:"Type your username",
              onBlur: onBlur,
              onChangeText: onChange,
              value: value
            }}
            error={ errors.username?.message }
          />
        )}
        name='username'
      />

      <Controller
        control={ control }
        rules={{
          required: {
            message: 'This field is required',
            value: true
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

      <Button
        title='Log In'
        action={ handleSubmit(onLogin) }
      />

      <Link label='Go to' route='register' />
    </MainContainer>
  );
}
