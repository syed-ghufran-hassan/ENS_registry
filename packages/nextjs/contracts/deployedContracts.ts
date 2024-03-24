/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  11155111: {
    Username: {
      address: "0x089C14f9B6E0A9EA8F579b5F1747E2d821bC27bD",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_username",
              type: "string",
            },
          ],
          name: "getUsernameAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_username",
              type: "string",
            },
          ],
          name: "registerUsername",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
