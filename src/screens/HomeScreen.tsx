import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';
import { typography } from '../styles/typography';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Contract Management</Text>
      <CustomButton
        title="Explore"
        onPress={() => navigation.navigate('Main', { screen: 'Explore' })}
        style={styles.button}
      />
      <CustomButton
        title="Marketplace"
        onPress={() => navigation.navigate('Main', { screen: 'Marketplace' })}
        style={styles.button}
      />
      <CustomButton
        title="Shop"
        onPress={() => navigation.navigate('Main', { screen: 'Shop' })}
        style={styles.button}
      />
      <CustomButton
        title="Profile"
        onPress={() => navigation.navigate('Main', { screen: 'Profile' })}
        style={styles.button}
      />
      <CustomButton
        title="Manage Contracts"
        onPress={() => navigation.navigate('ManageContracts')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.large,
  },
  title: {
    ...typography.header,
    color: colors.primary,
    marginBottom: spacing.large,
    textAlign: 'center',
  },
  button: {
    marginBottom: spacing.medium,
    width: '100%',
  },
});

export default HomeScreen;