import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ContractCard from '../../components/ContractCard';
import ContractsChart from '../../components/ContractsChart';
import CustomButton from '../../components/CustomButton';
import { contractService } from '../../services/contractService';
import { Contract } from '../../types';
import { colors } from '../../styles/colors';
import { withAuth } from '../../hoc/withAuth';
import { spacing } from '../../styles/spacing';

const ManageContracts: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const fetchedContracts = await contractService.fetchContracts(1, 10);
      setContracts(fetchedContracts);
    } catch (error) {
      console.error('Error fetching contracts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteContract = async (contractId: number) => {
    try {
      await contractService.deleteContract(contractId);
      setContracts(contracts.filter(contract => contract.id !== contractId));
    } catch (error) {
      console.error('Error deleting contract:', error);
    }
  };

  const renderContractCard = ({ item }: { item: Contract }) => (
    <ContractCard 
      contract={item} 
      onDelete={() => handleDeleteContract(item.id)}
      onEdit={() => navigation.navigate('EditContract', { contractId: item.id, contractData: item })}
    />
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ContractsChart contracts={contracts} />
      <CustomButton
        title="Deploy New Contract"
        onPress={() => navigation.navigate('DeployContract')}
        style={styles.deployButton}
      />
      <FlatList
        data={contracts}
        renderItem={renderContractCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingBottom: spacing.large,
  },
  deployButton: {
    marginVertical: spacing.medium,
  },
});

export default withAuth(ManageContracts, ['admin', 'employee']);