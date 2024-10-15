import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { Contract, ContractFormData } from '../types';

const sdk = new ThirdwebSDK("ethereum");
const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS'; // Replace with your actual contract address

export const contractService = {
  fetchContracts: async (page: number, pageSize: number): Promise<Contract[]> => {
    try {
      const contract = await sdk.getContract(CONTRACT_ADDRESS);
      const allContracts = await contract.call("getAllContracts");
      
      // Implement pagination
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const paginatedContracts = allContracts.slice(start, end);

      return paginatedContracts.map((c: any, index: number) => ({
        id: start + index + 1,
        category: c.category,
        description: c.description,
        deployedBy: c.deployedBy,
        deploymentDate: c.deploymentDate,
        status: c.status,
      }));
    } catch (error) {
      console.error('Error fetching contracts:', error);
      throw error;
    }
  },

  deployContract: async (formData: ContractFormData): Promise<any> => {
    try {
      const contract = await sdk.getContract(CONTRACT_ADDRESS);
      const result = await contract.call("deployContract", formData.category, formData.description);
      return result;
    } catch (error) {
      console.error('Error deploying contract:', error);
      throw error;
    }
  },

  updateContract: async (contractId: number, updatedData: Partial<ContractFormData>): Promise<any> => {
    try {
      const contract = await sdk.getContract(CONTRACT_ADDRESS);
      const result = await contract.call("updateContract", contractId, updatedData.category, updatedData.description);
      return result;
    } catch (error) {
      console.error('Error updating contract:', error);
      throw error;
    }
  },

  deleteContract: async (contractId: number): Promise<any> => {
    try {
      const contract = await sdk.getContract(CONTRACT_ADDRESS);
      const result = await contract.call("deleteContract", contractId);
      return result;
    } catch (error) {
      console.error('Error deleting contract:', error);
      throw error;
    }
  },
};