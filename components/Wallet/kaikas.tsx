export async function kaikasConnect() {
    if(window.klaytn){
        try {
            const klaytn = await window.klaytn.enable();
            if(window.klaytn.networkVersion !== 8217) {
                alert("Please change Kaikas network to Cypress");
            } else {
                sessionStorage.setItem("klaytn_kaikas_address", klaytn[0]);
                location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    } else {      
            alert("Please install Kaikas wallet"); window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi");
    }
}