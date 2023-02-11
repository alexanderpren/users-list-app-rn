import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Header } from '../components';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

          <Button
            onPress={() => {
              navigation.push('UserList');
            }}>
            User List
          </Button>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  footer: {
    color: Colors.lighter,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    marginTop: 30,
  },
});
