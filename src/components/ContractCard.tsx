import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import { Contract } from '../types';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';
import { typography } from '../styles/typography';

interface ContractCardProps {
  contract: Contract;
  onDelete: () => void;
  onEdit: () => void;
}

const ContractCard: React.FC<ContractCardProps> = ({ contract, onDelete, onEdit }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{contract.category}</Text>
      <Text style={styles.description}>{contract.description}</Text>
      <Text style={styles.deployedBy}>Deployed By: {contract.deployedBy}</Text>
      <Text style={styles.deploymentDate}>Deployment Date: {contract.deploymentDate}</Text>
      <Text style={styles.status}>Status: {contract.status}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton title="Edit" onPress={onEdit} style={styles.editButton} />
        <CustomButton title="Delete" onPress={onDelete} style={styles.deleteButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: spacing.medium,
    marginBottom: spacing.medium,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  category: {
    ...typography.subheader,
    marginBottom: spacing.small,
  },
  description: {
    ...typography.body,
    marginBottom: spacing.medium,
  },
  deployedBy: {
    ...typography.caption,
    color: colors.secondary,
  },
  deploymentDate: {
    ...typography.caption,
    color: colors.secondary,
  },
  status: {
    ...typography.caption,
    color: colors.primary,
    marginTop: spacing.small,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: spacing.medium,
  },
  editButton: {
    marginRight: spacing.small,
  },
  deleteButton: {
    backgroundColor: colors.danger,
  },
});

export default ContractCard;