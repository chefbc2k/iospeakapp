import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useContract, useMintNFT, useUpdateNFT } from '@thirdweb-dev/react-native';
import { generateImage } from '../../services/dalleService';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import { typography } from '../../styles/typography';

const NFTForm = ({ nft, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    contractor: '',
    executionDate: '',
    contractLength: '',
    allowedServices: '',
    restrictedServices: '',
    category: '',
    imagePrompt: '',
  });
  const [imageUrl, setImageUrl] = useState('');

  const { contract } = useContract("YOUR_NFT_CONTRACT_ADDRESS");
  const { mutate: mintNFT, isLoading: isMinting } = useMintNFT(contract);
  const { mutate: updateNFT, isLoading: isUpdating } = useUpdateNFT(contract);

  useEffect(() => {
    if (nft) {
      setFormData({
        contractor: nft.metadata.contractor || '',
        executionDate: nft.metadata.executionDate || '',
        contractLength: nft.metadata.contractLength || '',
        allowedServices: nft.metadata.allowedServices.join(', ') || '',
        restrictedServices: nft.metadata.restrictedServices.join(', ') || '',
        category: nft.metadata.category || '',
        imagePrompt: '',
      });
      setImageUrl(nft.metadata.image || '');
    }
  }, [nft]);

  const handleChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleGenerateImage = async () => {
    try {
      const result = await generateImage(formData.imagePrompt);
      setImageUrl(result.url);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    }
  };

  const handleSubmit = async () => {
    const metadata = {
      ...formData,
      image: imageUrl,
      allowedServices: formData.allowedServices.split(',').map(s => s.trim()),
      restrictedServices: formData.restrictedServices.split(',').map(s => s.trim()),
    };

    try {
      if (nft) {
        await updateNFT({ tokenId: nft.metadata.id, metadata });
      } else {
        await mintNFT({ metadata });
      }
      onSubmit();
    } catch (error) {
      console.error("Error processing NFT:", error);
      alert(`Failed to ${nft ? 'update' : 'mint'} NFT. Please try again.`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Contractor"
        value={formData.contractor}
        onChangeText={(text) => handleChange('contractor', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Execution Date"
        value={formData.executionDate}
        onChangeText={(text) => handleChange('executionDate', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contract Length"
        value={formData.contractLength}
        onChangeText={(text) => handleChange('contractLength', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Allowed Services (comma-separated)"
        value={formData.allowedServices}
        onChangeText={(text) => handleChange('allowedServices', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Restricted Services (comma-separated)"
        value={formData.restrictedServices}
        onChangeText={(text) => handleChange('restrictedServices', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={formData.category}
        onChangeText={(text) => handleChange('category', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image Prompt for DALL·E"
        value={formData.imagePrompt}
        onChangeText={(text) => handleChange('imagePrompt', text)}
      />
      <Button title="Generate Image" onPress={handleGenerateImage} />
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <Button 
        title={nft ? "Update NFT" : "Create NFT"} 
        onPress={handleSubmit} 
        disabled={isMinting || isUpdating}
      />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.medium,
  },
  input: {
    ...typography.body,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.small,
    marginBottom: spacing.small,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: spacing.medium,
  },
});

export default NFTForm;