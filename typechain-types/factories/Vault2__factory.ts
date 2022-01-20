/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vault2, Vault2Interface } from "../Vault2";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f5661756c742057726170706572000000000000000000000000000000000000008152506040518060400160405280600581526020017f5641554c54000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620000b8565b508060049080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000168565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b600060028204905060018216806200018157607f821691505b602082108114156200019857620001976200019e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b611c4080620001dd6000396000f3fe6080604052600436106100c25760003560e01c806342966c681161007f578063a0712d6811610059578063a0712d6814610290578063a457c2d7146102ac578063a9059cbb146102e9578063dd62ed3e14610326576100c2565b806342966c68146101ff57806370a082311461022857806395d89b4114610265576100c2565b806306fdde03146100c7578063095ea7b3146100f257806318160ddd1461012f57806323b872dd1461015a578063313ce5671461019757806339509351146101c2575b600080fd5b3480156100d357600080fd5b506100dc610363565b6040516100e99190611481565b60405180910390f35b3480156100fe57600080fd5b50610119600480360381019061011491906111f7565b6103f5565b6040516101269190611466565b60405180910390f35b34801561013b57600080fd5b50610144610413565b6040516101519190611623565b60405180910390f35b34801561016657600080fd5b50610181600480360381019061017c91906111a8565b61041d565b60405161018e9190611466565b60405180910390f35b3480156101a357600080fd5b506101ac610515565b6040516101b9919061163e565b60405180910390f35b3480156101ce57600080fd5b506101e960048036038101906101e491906111f7565b61051e565b6040516101f69190611466565b60405180910390f35b34801561020b57600080fd5b5061022660048036038101906102219190611233565b6105ca565b005b34801561023457600080fd5b5061024f600480360381019061024a9190611143565b610651565b60405161025c9190611623565b60405180910390f35b34801561027157600080fd5b5061027a610699565b6040516102879190611481565b60405180910390f35b6102aa60048036038101906102a59190611233565b61072b565b005b3480156102b857600080fd5b506102d360048036038101906102ce91906111f7565b6107f4565b6040516102e09190611466565b60405180910390f35b3480156102f557600080fd5b50610310600480360381019061030b91906111f7565b6108df565b60405161031d9190611466565b60405180910390f35b34801561033257600080fd5b5061034d6004803603810190610348919061116c565b6108fd565b60405161035a9190611623565b60405180910390f35b60606003805461037290611787565b80601f016020809104026020016040519081016040528092919081815260200182805461039e90611787565b80156103eb5780601f106103c0576101008083540402835291602001916103eb565b820191906000526020600020905b8154815290600101906020018083116103ce57829003601f168201915b5050505050905090565b6000610409610402610984565b848461098c565b6001905092915050565b6000600254905090565b600061042a848484610b57565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610475610984565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611563565b60405180910390fd5b61050985610501610984565b85840361098c565b60019150509392505050565b60006012905090565b60006105c061052b610984565b848460016000610539610984565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105bb9190611675565b61098c565b6001905092915050565b6000811161060d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060490611543565b60405180910390fd5b6106173382610dd8565b7fd83c63197e8e676d80ab0122beba9a9d20f3828839e9a1d6fe81d242e9cd7e6e816040516106469190611623565b60405180910390a150565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546106a890611787565b80601f01602080910402602001604051908101604052809291908181526020018280546106d490611787565b80156107215780601f106106f657610100808354040283529160200191610721565b820191906000526020600020905b81548152906001019060200180831161070457829003601f168201915b5050505050905090565b6000811161076e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076590611543565b60405180910390fd5b8034146107b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a790611503565b60405180910390fd5b6107ba3334610faf565b7f176b02bb2d12439ff7a20b59f402cca16c76f50508b13ef3166a600eb719354a816040516107e99190611623565b60405180910390a150565b60008060016000610803610984565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156108c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b7906115e3565b60405180910390fd5b6108d46108cb610984565b8585840361098c565b600191505092915050565b60006108f36108ec610984565b8484610b57565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f3906115c3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a63906114e3565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b4a9190611623565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbe906115a3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2e906114a3565b60405180910390fd5b610c4283838361110f565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610cc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbf90611523565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d5b9190611675565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610dbf9190611623565b60405180910390a3610dd2848484611114565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3f90611583565b60405180910390fd5b610e548260008361110f565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610eda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed1906114c3565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610f3191906116cb565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f969190611623565b60405180910390a3610faa83600084611114565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561101f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101690611603565b60405180910390fd5b61102b6000838361110f565b806002600082825461103d9190611675565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110929190611675565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110f79190611623565b60405180910390a361110b60008383611114565b5050565b505050565b505050565b60008135905061112881611bdc565b92915050565b60008135905061113d81611bf3565b92915050565b60006020828403121561115557600080fd5b600061116384828501611119565b91505092915050565b6000806040838503121561117f57600080fd5b600061118d85828601611119565b925050602061119e85828601611119565b9150509250929050565b6000806000606084860312156111bd57600080fd5b60006111cb86828701611119565b93505060206111dc86828701611119565b92505060406111ed8682870161112e565b9150509250925092565b6000806040838503121561120a57600080fd5b600061121885828601611119565b92505060206112298582860161112e565b9150509250929050565b60006020828403121561124557600080fd5b60006112538482850161112e565b91505092915050565b61126581611711565b82525050565b600061127682611659565b6112808185611664565b9350611290818560208601611754565b61129981611817565b840191505092915050565b60006112b1602383611664565b91506112bc82611828565b604082019050919050565b60006112d4602283611664565b91506112df82611877565b604082019050919050565b60006112f7602283611664565b9150611302826118c6565b604082019050919050565b600061131a604783611664565b915061132582611915565b606082019050919050565b600061133d602683611664565b91506113488261198a565b604082019050919050565b6000611360602983611664565b915061136b826119d9565b604082019050919050565b6000611383602883611664565b915061138e82611a28565b604082019050919050565b60006113a6602183611664565b91506113b182611a77565b604082019050919050565b60006113c9602583611664565b91506113d482611ac6565b604082019050919050565b60006113ec602483611664565b91506113f782611b15565b604082019050919050565b600061140f602583611664565b915061141a82611b64565b604082019050919050565b6000611432601f83611664565b915061143d82611bb3565b602082019050919050565b6114518161173d565b82525050565b61146081611747565b82525050565b600060208201905061147b600083018461125c565b92915050565b6000602082019050818103600083015261149b818461126b565b905092915050565b600060208201905081810360008301526114bc816112a4565b9050919050565b600060208201905081810360008301526114dc816112c7565b9050919050565b600060208201905081810360008301526114fc816112ea565b9050919050565b6000602082019050818103600083015261151c8161130d565b9050919050565b6000602082019050818103600083015261153c81611330565b9050919050565b6000602082019050818103600083015261155c81611353565b9050919050565b6000602082019050818103600083015261157c81611376565b9050919050565b6000602082019050818103600083015261159c81611399565b9050919050565b600060208201905081810360008301526115bc816113bc565b9050919050565b600060208201905081810360008301526115dc816113df565b9050919050565b600060208201905081810360008301526115fc81611402565b9050919050565b6000602082019050818103600083015261161c81611425565b9050919050565b60006020820190506116386000830184611448565b92915050565b60006020820190506116536000830184611457565b92915050565b600081519050919050565b600082825260208201905092915050565b60006116808261173d565b915061168b8361173d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116c0576116bf6117b9565b5b828201905092915050565b60006116d68261173d565b91506116e18361173d565b9250828210156116f4576116f36117b9565b5b828203905092915050565b600061170a8261171d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611772578082015181840152602081019050611757565b83811115611781576000848401525b50505050565b6000600282049050600182168061179f57607f821691505b602082108114156117b3576117b26117e8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f496e76616c696420616d6f756e742c2069742073686f756c6420657175616c2060008201527f74686520616d6f756e74206f6620457468657220696e20746865207472616e7360208201527f616374696f6e2e00000000000000000000000000000000000000000000000000604082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e76616c696420616d6f756e742c2073686f756c642062652067726561746560008201527f72207468616e20302e0000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611be5816116ff565b8114611bf057600080fd5b50565b611bfc8161173d565b8114611c0757600080fd5b5056fea26469706673582212209b57bc9faca77a2ad67417bb94298a48171d151820b1c49e579b771128d67e1764736f6c63430008040033";

type Vault2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Vault2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vault2__factory extends ContractFactory {
  constructor(...args: Vault2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Vault2";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vault2> {
    return super.deploy(overrides || {}) as Promise<Vault2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Vault2 {
    return super.attach(address) as Vault2;
  }
  connect(signer: Signer): Vault2__factory {
    return super.connect(signer) as Vault2__factory;
  }
  static readonly contractName: "Vault2";
  public readonly contractName: "Vault2";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Vault2Interface {
    return new utils.Interface(_abi) as Vault2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vault2 {
    return new Contract(address, _abi, signerOrProvider) as Vault2;
  }
}
