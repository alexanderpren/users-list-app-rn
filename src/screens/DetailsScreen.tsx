import React from 'react';
import { Card, Divider, MD3Colors } from 'react-native-paper';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Tel from '../components/Tel';

export const DetailsScreen = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card mode="contained" style={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <ImageBackground
              style={styles.headerBackgroundImage}
              imageStyle={{ borderRadius: 6 }}
              source={{ uri: 'https://i.imgur.com/9J2uboM.png' }}>
              <View style={styles.headerColumn}>
                <Image
                  style={styles.userImage}
                  source={{ uri: 'https://i.imgur.com/GfkNpVG.jpg' }}
                />
                <Text style={styles.userNameText}>Alex</Text>
                <View style={styles.userAddressRow}>
                  <View>
                    <Icon
                      name="map-marker"
                      size={15}
                      color={MD3Colors.secondary80}
                    />
                  </View>
                  <View style={styles.userCityRow}>
                    <Text style={styles.userCityText}>Ginatown, Ciudad</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <Divider />
        </Card>
        <Tel />
      </View>
    </ScrollView>
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
  container: {
    flex: 1,
  },

  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {
    borderWidth: 0,
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
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
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
});
