import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';
import CustomButton from './CustomButton';
import { colors } from '../styles/colors';

interface NFTFormProps {
  onSubmit: (formData: NFTFormData) => void;
  onCancel: () => void;
  initialData?: NFT;
}

interface NFTFormData {
  name: string;
  description: string;
  category: string;
  prompt: string;
  metadata: {
    contractor: string;
    executionDate: string;
    length: string;
    servicesAllowed: string[];
  };
}

const NFTForm: React.FC<NFTFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [prompt, setPrompt] = useState('');
  const [contractor, setContractor] = useState('');
  const [executionDate, setExecutionDate] = useState('');
  const [length, setLength] = useState('');
  const [servicesAllowed, setServicesAllowed] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setCategory(initialData.category);
      setContractor(initialData.metadata.contractor);
      setExecutionDate(initialData.metadata.executionDate);
      setLength(initialData.metadata.length);
      setServicesAllowed(initialData.metadata.servicesAllowed.join(', '));
    }
  }, [initialData]);

  const handleSubmit = () => {
    const formData: NFTFormData = {
      name,
      description,
      category,
      prompt,
      metadata: {
        contractor,
        executionDate,
        length,
        servicesAllowed: servicesAllowed.split(',').map(s => s.trim()),
      },
    };
    onSubmit(formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.form}>
      <TextInput
        placeholder="NFT Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="NFT Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <TextInput
        placeholder="NFT Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <TextInput
        placeholder="Contractor"
        value={contractor}
        onChangeText={setContractor}
        style={styles.input}
      />
      <TextInput
        placeholder="Execution Date"
        value={executionDate}
        onChangeText={setExecutionDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Length"
        value={length}
        onChangeText={setLength}
        style={styles.input}
      />
      <TextInput
        placeholder="Services Allowed (comma-separated)"
        value={servicesAllowed}
        onChangeText={setServicesAllowed}
        style={styles.input}
      />
      <TextInput
        placeholder="Image Generation Prompt"
        value={prompt}
        onChangeText={setPrompt}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <CustomButton title="Save NFT" onPress={handleSubmit} variant="primary" />
        <CustomButton title="Cancel" onPress={onCancel} variant="secondary" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  input: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default NFTForm;