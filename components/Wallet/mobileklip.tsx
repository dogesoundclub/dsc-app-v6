export async function connect(): Promise<any> {
    const klipSDK = require("klip-sdk");
    const res = await klipSDK.prepare.auth({ bappName: "도지사운드클럽" });
    window.open(`https://klipwallet.com/?target=/a2a?request_key=${res.request_key}`);
    const interval = setInterval(async () => {
        const result = await klipSDK.getResult(res.request_key);
        if (result.result !== undefined) {
            clearInterval(interval);
            sessionStorage.setItem('klaytn_klip_address', result.result.klaytn_address);
            location.reload();
        }
    }, 1000);
}