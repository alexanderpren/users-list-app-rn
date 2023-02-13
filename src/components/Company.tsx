import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MD3Colors } from 'react-native-paper';
import { Company } from '../types/users';

type CompanyProps = {
  company: Company;
};

export const CompanyComponent = ({ company }: CompanyProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Company :</Text>
        <Text> {company?.name}</Text>
        <Icon
          style={{ marginLeft: 10 }}
          name="internet-explorer"
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
