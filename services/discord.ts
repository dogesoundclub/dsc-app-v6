import axios from "axios";
import Caver from "caver-js";
import { HashConnect, MessageTypes } from "hashconnect";

declare global {
  interface Window {
    klaytn?: any;
  }
}

export async function getKlaytnMsg(code: string) {
  if (window.klaytn) {
    try {
      const klaytn = await window.klaytn.enable();
      const caver = new Caver(window.klaytn);
      const msg = await caver.rpc.klay.sign(klaytn[0], "Check Holder");
      // address, code, si
      const res = await axios.post("https://api.dogesound.club/checkholder", {
        signedMessage: msg,
        code,
        address: klaytn[0],
      });
      console.log(res.data);
      //   console.log(msg);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

export async function getHederaMsg() {
  const hashconnect = new HashConnect();
  const appMetadata = {
    name: "Monshoecl Holder Verify",
    description: "Monshoecl Holder Verify",
    icon: "https://dogesound.club/favicon.ico",
    url: "https://dogesound.club",
  };
  await hashconnect.init(appMetadata, "mainnet", true);
  hashconnect.pairingEvent.once(async (data) => {
    if (data) {
      const payload = {
        url: "https://dogesound.club",
        data: { token: "holder" },
      };

      const res = await axios.get("/api/hedera");
      const signingData = res.data;
      console.log(signingData);
      const serverSigAsArr = Object.values(signingData.serverSignature);
      console.log("server sig arr", serverSigAsArr);
      console.log(signingData.serverSigningAccount);
      //@ts-ignore
      const serverSigAsBuffer = Buffer.from(serverSigAsArr);
      console.log(serverSigAsBuffer);
      const auth = await hashconnect.authenticate(
        data.topic,
        data.accountIds[0],
        signingData.serverSigningAccount,
        serverSigAsBuffer,
        payload
      );

      const balance = await axios.post(
        "https://api.dogesound.club/checkholder",
        JSON.stringify({
          signedMessage: "0x0000000000000000000000000000000000000000",
          signingAccount: data.accountIds[0],
          res: auth,
        })
      );
      //   const get = await axios.post(
      //     "http://localhost:5050/getAuth",
      //     JSON.stringify(receiveAuthData),
      //     { headers: { "Content-Type": "application/json" } }
      //   );
      //   console.log(get.data);
      console.log(balance.data);

      await new Promise<MessageTypes.AuthenticationResponse>(
        (res) => (hashconnect.authResolver = res)
      );
      return true;
    }
  });
  hashconnect.connectToLocalWallet();
}

// export const authenticateUser = async () => {
//   const res = await axios.get("http://localhost:5050/sendAuth");
//   const signingData = res.data;

//   console.log(signingData);
// };
