import QRCode from "qrcode";

export async function connect(): Promise<any> {
    const klipSDK = require("klip-sdk");
    const res = await klipSDK.prepare.auth({ bappName: "DogeSoundClub" });
    await klipSDK.request(res, async () => {
        const qr = await QRCode.toDataURL(`https://klipwallet.com/?target=/a2a?request_key=${res.request_key}`);
        console.log(qr)
        return new Promise((resolve) => {
            const interval = setInterval(async () => {
                const result = await klipSDK.getResult(res.request_key);
                console.log(result)
                if (result.result !== undefined) {
                    clearInterval(interval);
                    setTimeout(() => resolve(result.result), 2000);
                    sessionStorage.setItem('klaytn_address', result.result.klaytn_address);
                    location.reload();
                }
            }, 1000);
        });
    });
}

export async function getKlip() {
    const address = (await connect())?.klaytn_address;
}