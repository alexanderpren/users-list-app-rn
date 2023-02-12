import React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';
import { CardProfile } from '../components/CardProfile';

import Tel from '../components/Tel';
import { Props } from '../types/navigators';

export const DetailsScreen = ({ route }: any) => {
  const { username, website, company, address, phone, email } = route.params;
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <CardProfile username={username} address={address} />
        <Tel number={phone} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
});
