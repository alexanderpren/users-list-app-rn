import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import { MD3Colors } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
type tel = {
  number: string;
};

export const Tel = ({ number }: tel) => {
  const handlePress = async () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    if (await Linking.canOpenURL(phoneNumber)) {
      await Linking.openURL(phoneNumber);
    } else {
      console.error('Error: Could not open phone number.');
    }
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container]}>
        <View style={styles.iconRow}>
          <Icon name="phone" size={40} color={MD3Colors.primary20} />
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}>{number}</Text>
          </View>
          <View style={styles.telNameColumn}>
            <Text style={styles.telNameText}>Home</Text>
          </View>
        </View>
        <View style={styles.smsRow}>
          <Icon name="commenting" size={40} color={MD3Colors.secondary80} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
    marginTop: 5,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 12,
  },
  smsIcon: {
    color: 'darkgray',
    fontSize: 30,
  },
  smsRow: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  telIcon: {
    color: 'blue',
    fontSize: 30,
  },
  telNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  telNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  telNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  telNumberText: {
    fontSize: 16,
  },
  telRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
