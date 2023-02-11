import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return navigation.canGoBack() ? (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
     {/*  <Image source={require('../../assets/images/icons/close.png')} /> */}
    </TouchableOpacity>
  ) : (
    <></>
  );
};

export default BackButton;
