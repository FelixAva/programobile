import { create } from 'zustand';
import { User, UserSession } from '../types/user';

interface UserState {
  session: UserSession | undefined;
  data: User | undefined;
  setSession: (data: UserSession) => void;
  setData: (data: User) => void;
}

const useUserStore = create<UserState>()((set) => ({
  session: undefined,
  data: undefined,
  setSession: ( data ) => set(() => ({
    session: data
  })),
  setData: (data) => set(() => ({
    data: data
  }))
}));
