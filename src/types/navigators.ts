import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeNavigatorProps = {
  Home: {};
  UserDetail: {};
  UserList: {};
  Maps: {};
};

export type Props = NativeStackScreenProps<
  HomeNavigatorProps,
  'UserDetail',
  'UserList'
>;
