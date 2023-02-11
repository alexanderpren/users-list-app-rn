/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the Redux TypeScript template
 * https://github.com/rahsheen/react-native-template-redux-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Header } from './src/components';
import { Button } from 'react-native-paper';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

          <View style={styles.footer}>
            <Button>User List</Button>
          </View>
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

export default App;
