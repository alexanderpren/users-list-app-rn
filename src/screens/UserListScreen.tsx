import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Loading } from '../components';
import { FlatListComponent } from '../components/FlatListComponent';
import { useGetUsersQuery } from '../features/api/apiSlice';

export const UserListScreen: FC = () => {
  const {
    data: userArray,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    content = <FlatListComponent users={userArray} />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <SafeAreaView style={styles.container}>{content}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
