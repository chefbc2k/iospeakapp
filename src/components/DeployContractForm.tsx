import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import { colors } from '../styles/colors';

interface DeployContractFormProps {
  onDeploy: (formData: { category: string; description: string }) => void;
  isSubmitting: boolean;
  initialData?: { category: string; description: string };
  submitButtonTitle?: string;
}

const DeployContractForm: React.FC<DeployContractFormProps> = ({
  onDeploy,
  isSubmitting,
  initialData,
  submitButtonTitle = 'Deploy Contract',
}) => {
  const [category, setCategory] = useState(initialData?.category || '');
  const [description, setDescription] = useState(initialData?.description || '');

  useEffect(() => {
    if (initialData) {
      setCategory(initialData.category);
      setDescription(initialData.description);
    }
  }, [initialData]);

  const handleSubmit = () => {
    onDeploy({ category, description });
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <CustomButton
        title={submitButtonTitle}
        onPress={handleSubmit}
        disabled={isSubmitting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default DeployContractForm;