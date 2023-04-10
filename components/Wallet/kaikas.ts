import Caver from "caver-js";

declare global {
  interface Window {
    klaytn?: any;
  }
}

export async function getkaikas() {
    if (window.klaytn) {
      try {
        const klaytn = await window.klaytn.enable();
        const caver = new Caver(window.klaytn);
        if(window.klaytn.networkVersion !== 8217) {
          alert("Please connect to Cypress network");
          return false;
        } else {
          return true;
        }
      } catch (e) {
        return false;
      }
    } else {
        alert("Please install Kaikas wallet");
        window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi")
        return false;
    }
}