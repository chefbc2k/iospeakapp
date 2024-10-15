import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type MainStackParamList = {
  One: undefined;
  Two: { message: string };
};

type ScreenOneProps = {
  route: RouteProp<MainStackParamList, 'One'>;
  navigation: StackNavigationProp<MainStackParamList, 'One'>;
};

const ScreenOne: React.FC<ScreenOneProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Tapped!', 'You tapped the button!')}
      >
        <Text style={styles.buttonText}>Tap me for an alert</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Two', { message: 'Hello, world!' })}
      >
        <Text style={styles.buttonText}>Go to next screen</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2e6ddf',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default ScreenOne;