import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Header } from '../components';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CustomModuleAndroid from '../CustomModule';

export const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [androidId, setAndroidId] = useState('');

  useEffect(() => {
    const fetchDeviceId = async () => {
      const id = await CustomModuleAndroid.getDeviceId();

      setAndroidId(id);
    };
    fetchDeviceId();
  }, []);

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
          <Button
            onPress={() => {
              CustomModuleAndroid.showText();
            }}>
            Say Hi
          </Button>

          {androidId && <Text>Device ID: {androidId}</Text>}
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
