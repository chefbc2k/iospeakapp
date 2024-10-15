import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import { typography } from '../../styles/typography';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      {/* Add profile information here */}
      <CustomButton
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
        style={styles.button}
      />
      <CustomButton
        title="My NFTs"
        onPress={() => navigation.navigate('MyNFTs')}
        style={styles.button}
      />
      <CustomButton
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
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
  },
  button: {
    marginTop: spacing.medium,
    width: '100%',
  },
});

export default ProfileScreen;