import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { FlatItem } from './FlatItem';
import { Users } from '../types/users';

export const FlatListComponent = ({ users }: Users) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <FlatItem userData={item} />}
        keyExtractor={user => String(user.id)}
      />
    </SafeAreaView>
  );
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
