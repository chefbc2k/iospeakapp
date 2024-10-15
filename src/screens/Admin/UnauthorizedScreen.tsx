import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { spacing } from '../styles/spacing';

const UnauthorizedScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Unauthorized Access" />
      <View style={styles.content}>
        <Text style={styles.message}>You are not authorized to access this page.</Text>
        <CustomButton 
          title="Go to Home" 
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.large,
  },
  message: {
    ...typography.body,
    color: colors.error,
    textAlign: 'center',
    marginBottom: spacing.medium,
  },
});

export default UnauthorizedScreen;