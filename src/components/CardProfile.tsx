import { Text, View } from 'react-native';
import React from 'react';
import { Card, Divider, MD3Colors } from 'react-native-paper';
import { Image, ImageBackground, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Address } from '../types/users';
type PropsProfile = {
  username: string;
  address: Address;
};
export const CardProfile = ({ username, address }: PropsProfile) => {
  return (
    <Card mode="contained" style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          source={{ uri: 'https://i.imgur.com/9J2uboM.png' }}>
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{ uri: 'https://i.imgur.com/GfkNpVG.jpg' }}
            />
            <Text style={styles.userNameText}>{username}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="map-marker"
                  size={15}
                  color={MD3Colors.secondary80}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>{`${address.city}`}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <Divider />
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  headerContainer: {
    borderWidth: 0,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
});
