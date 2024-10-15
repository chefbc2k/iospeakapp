import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type MainStackParamList = {
  Two: { message: string };
};

type ScreenTwoProps = {
  route: RouteProp<MainStackParamList, 'Two'>;
  navigation: StackNavigationProp<MainStackParamList, 'Two'>;
};

const ScreenTwo: React.FC<ScreenTwoProps> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You're viewing screen two!</Text>
      <Text style={styles.text}>Message: {route.params.message}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2e6ddf',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default ScreenTwo;