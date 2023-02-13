import { Text, StyleSheet, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MD3Colors } from 'react-native-paper';
type dataProps = {
  title: string;
  text: string;
  icon: string;
};
export const TextDetail = ({ title, text, icon }: dataProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{title} :</Text>
        <Text> {text ? text : 'Error'}</Text>
        <Icon
          style={{ marginLeft: 10 }}
          name={icon}
          size={25}
          color={MD3Colors.primary80}
        />
      </View>
    </View>
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
