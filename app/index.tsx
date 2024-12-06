// Libraries
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';

// Hooks
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

// Components
import {
  View,
  Text,
  Image,
} from "react-native";
import { InputField, Button } from '@/components';
import { Loading } from '@/UI';

// Extras (Helpers, Constants, Types, Interfaces, Etc)
import { getMobileSession } from '@/api/api-client';
import { UserLogin } from '@/types/user';
import { useUserStore } from '@/hooks/useUser';

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
      username: 'Faag05',
      password: 'C@ricatura05'
    }
  });

  const { setSession } = useUserStore();

  const {
    mutate,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: getMobileSession,
    onSuccess: (data) => {
      /* Storage the user's session data */
      setSession( data );
      alert(`Welcome ${data.name}`);
      router.replace('/tabs');
    }
  });

  const onLogin = ( data: UserLogin ) => {
    mutate(data);
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
        isError && <ErrorContainer> {error.message} </ErrorContainer>
      }

      {
        isPending
          ? (
            <Loading color='blue' />
          )
          : (
            <Button
              title='Log In'
              action={ handleSubmit(onLogin) }
              />
          )
      }
    </MainContainer>
  );
}
