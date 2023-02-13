import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MD3Colors } from 'react-native-paper';

type WebsiteProps = {
  website: string;
};

export const Website = ({ website }: WebsiteProps) => {
  const handlePress = async () => {
    if (await Linking.canOpenURL(website)) {
      await Linking.openURL(website);
    } else {
      Alert.alert(`Don't know how to open this URL: ${website}`);
    }
  };

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.title}>Website : </Text>
        <Text>{website}</Text>
        <Icon
          style={{ marginLeft: 10 }}
          name="internet-explorer"
          size={25}
          color={MD3Colors.primary80}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 10,
  },
  container: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: { color: 'blue', fontWeight: 'bold' },
});
