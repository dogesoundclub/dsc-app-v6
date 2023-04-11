export async function connect(): Promise<any> {
    const klipSDK = require("klip-sdk");
    const url = 'https://a2a-api.klipwallet.com/v2/a2a/prepare';
    const data = '{"bapp": { "name" : "DogeSoundClub" }, "callback": { "success": "https://dogesound.club/activities", "fail": "https://dogesound.club/activities" }, "type": "auth" }';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    });
    const res = await response.json();
    await klipSDK.request(res, async () => {
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

export async function getMobileKlip() {
    const address = (await connect())?.klaytn_address;
}