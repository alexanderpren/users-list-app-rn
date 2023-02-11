import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { Loading } from '../components';

import { useGetUsersQuery } from '../features/api/apiSlice';
import { User } from '../types/users';

let PostExcerpt = (user: User) => {
  return (
    <View key={user.id}>
      <Text>{user.name}</Text>
    </View>
  );
};

export const UserListScreen = () => {
  const {
    data: usersArray,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    content = usersArray.map((user: User) => (
      <PostExcerpt key={user.id} user={user} />
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <View>
      <Text>Users</Text>
      {content}
    </View>
  );
};
