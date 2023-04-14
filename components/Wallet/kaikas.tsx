export async function kaikasConnect() {
  if (window.klaytn) {
    try {
      const klaytn = await window.klaytn.enable();
      if(window.klaytn.networkVersion !== 8217) {
        alert("Please connect to Cypress network");
      } else {
        sessionStorage.setItem('klaytn_kaikas_address', klaytn[0]);
        location.reload();
      }
    } catch (e) {
      
    }
  } else {
      alert("Please install Kaikas wallet");
      window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi");
  }
}