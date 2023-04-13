export async function getkaikas() {
    if (window.klaytn) {
      try {
        await window.klaytn.enable();
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
        window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi");
        return false;
    }
}