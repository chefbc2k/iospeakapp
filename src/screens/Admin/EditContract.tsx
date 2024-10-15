import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { contractService } from '../../services/contractService';
import CustomButton from '../../components/CustomButton';
import { colors } from '../../styles/colors';
import Toast from 'react-native-toast-message';
import DeployContractForm from '../../components/DeployContractForm';
import { Contract } from '../../types';

type EditContractRouteParams = {
  contractId: number;
  contractData: Contract;
};

const EditContract: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { contractId, contractData } = route.params as EditContractRouteParams;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpdate = async (formData: { category: string; description: string }) => {
    setIsSubmitting(true);
    try {
      await contractService.updateContract(contractId, formData);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Contract updated successfully!',
      });
      navigation.goBack();
    } catch (error) {
      console.error('Error updating contract:', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to update contract.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DeployContractForm
        onDeploy={handleUpdate}
        isSubmitting={isSubmitting}
        initialData={{
          category: contractData.category,
          description: contractData.description,
        }}
        submitButtonTitle="Update Contract"
      />
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

export default EditContract;