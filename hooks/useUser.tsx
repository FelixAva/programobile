import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User, UserSession } from '../types/user';

interface UserState {
  session: UserSession | undefined;
  data: User | undefined;
  setSession: (data: UserSession) => void;
  setData: (data: User) => void;
  deleteUserData: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
      session: undefined,
      data: undefined,
      setSession: ( data ) => set(() => ({
        session: data
      })),
      setData: (data) => set(() => ({
        data: data
      })),
      deleteUserData: () => set(() => ({
        data: undefined,
        session: undefined
      }))
    }),
    {
      name: 'userStore'
    }
  )
));
