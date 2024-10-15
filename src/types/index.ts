export interface Contract {
  id: number;
  category: string;
  description: string;
  deployedBy: string;
  deploymentDate: string;
  status: 'Active' | 'Inactive';
}

export interface ContractFormData {
  category: string;
  description: string;
}