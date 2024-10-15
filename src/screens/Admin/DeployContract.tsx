import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { contractService } from '../../services/contractService';
import CustomButton from '../../components/CustomButton';
import { colors } from '../../styles/colors';
import Toast from 'react-native-toast-message';
import DeployContractForm from '../../components/DeployContractForm';

const DeployContract: React.FC = () => {
  const navigation = useNavigation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDeploy = async (formData: { category: string; description: string }) => {
    setIsSubmitting(true);
    try {
      await contractService.deployContract(formData);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Contract deployed successfully!',
      });
      navigation.goBack();
    } catch (error) {
      console.error('Error deploying contract:', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to deploy contract.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DeployContractForm onDeploy={handleDeploy} isSubmitting={isSubmitting} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
});

export default DeployContract;