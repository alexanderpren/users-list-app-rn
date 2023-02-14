import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const MapScreen = ({ route }: any) => {
  const { lat, long } = route.params;

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.mapStyle}
      initialRegion={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }}
      mapType="standard"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
