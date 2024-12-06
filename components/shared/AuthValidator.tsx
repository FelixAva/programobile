import React, { ReactNode, useState } from 'react';
import { useUserStore } from '@/hooks/useUser';
import { Redirect } from 'expo-router';
import { Loading } from '@/UI';

export default function AuthValidator() {
  const [isLoading] = useState<boolean>(true);
  const { session } = useUserStore();

  if ( isLoading ) <Loading size={80} color='blue' />;

  if ( !session ) {
    return <Redirect href="/" />
  } else {
    return <Redirect href="/tabs" />
  }
}
