import { ThirdwebSDK } from '@thirdweb-dev/sdk';

const sdk = new ThirdwebSDK("ethereum");

export const thirdwebService = {
  getNFTs: async (contractAddress: string) => {
    const contract = await sdk.getContract(contractAddress);
    return contract.erc721.getAll();
  },
  mintNFT: async (contractAddress: string, metadata: any) => {
    const contract = await sdk.getContract(contractAddress);
    return contract.erc721.mint(metadata);
  },
  // Add more Thirdweb-related functions as needed
};