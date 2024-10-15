import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const NFTCard = ({ image, owner, metadata }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <TouchableOpacity onPress={toggleFlip} style={styles.card}>
      {!isFlipped ? (
        <View>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.text}>Owner: {owner}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Contractor: {metadata.contractor}</Text>
          <Text style={styles.text}>Execution Date: {metadata.executionDate}</Text>
          <Text style={styles.text}>Contract Length: {metadata.contractLength}</Text>
          <Text style={styles.text}>Allowed Services: {metadata.allowedServices.join(', ')}</Text>
          <Text style={styles.text}>Restricted Services: {metadata.restrictedServices.join(', ')}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default NFTCard;