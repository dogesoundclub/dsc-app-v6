import Web3 from "web3";
import Web3Modal from "web3modal";
import { KaikasWeb3Provider } from "@klaytn/kaikas-web3-provider"

export async function getMetamask() {

  const providerOptions = {
    kaikas: {
      package: KaikasWeb3Provider // required
    }
  };

  const web3Modal = new Web3Modal({
      providerOptions: providerOptions //required
  });

  const provider = await web3Modal.connect();

  const test = new KaikasWeb3Provider(provider);

  const web3 = new Web3(provider);
  console.log(test.getChainId())
}