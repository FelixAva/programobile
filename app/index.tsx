import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useForm, Controller } from 'react-hook-form';
import {
  View,
  Text,
  Image,
} from "react-native";
import { InputField, Button } from '@/components';
import useApi from '@/hooks/useApi';
import { UserSession } from '../types/user';
import { useRouter } from 'expo-router';

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

const ErrorContainer = styled(Text)`
  font-size: 20px;
  color: red;
  max-width: 350px;
  line-height: 25px;
  text-align: center;
`

export default function Index() {
  const router = useRouter();
  const { control,handleSubmit,formState: { errors } } = useForm({
    defaultValues: {
      username: 'felix@gmail.com',
      password: 'contrA|123'
    }
  });
  const {
    error,
    isLoading,
    getMobileSession
  } = useApi();

  const onLogin = ( data: User ) => {
    getMobileSession( 'Faag05', 'C@ricatura05' )
    .then( (response: UserSession) => {
      if ( error === null ) {
        console.log('Storage the user data');
        alert(`Welcome ${response.name}`);
        router.replace('/tabs');
      }
    });
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

      {
        error && <ErrorContainer>{ error }</ErrorContainer>
      }

      <Button
        title='Log In'
        action={ handleSubmit(onLogin) }
      />
    </MainContainer>
  );
}
