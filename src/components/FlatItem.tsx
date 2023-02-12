import React from 'react';
import { List, MD3Colors } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { User } from '../types/users';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../app/hooks';
import { setName } from '../features/user/userSlice';

export const FlatItem: React.FC<User> = ({ userData }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const { name, email } = userData;

  const setNameTitle = () => {
    dispatch(setName({ id: userData.id, name: userData.name }));
    navigation.push('UserDetail', userData);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={setNameTitle}>
      <List.Item
        title={name}
        description={email}
        left={() => (
          <View style={styles.user}>
            <Icon name="user-circle" size={30} color={MD3Colors.primary40} />
          </View>
        )}
        right={() => (
          <View style={styles.chevron}>
            <Icon
              name="chevron-right"
              size={20}
              color={MD3Colors.secondary80}
            />
          </View>
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'beige',
    marginLeft: 1,
    borderColor: 'tomato',
  },
  user: { marginLeft: 10 },
  chevron: { marginTop: 10 },
});
