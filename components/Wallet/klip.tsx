import QRCode from "qrcode";
// import { prepare, request, getResult, getCardList } from 'klip-sdk'
import axios from 'axios';

export async function getKlip() {
    
    const qr = await QRCode.toDataURL(`https://klipwallet.com/?target=/a2a?request_key=353e83ff-2389-4cf0-8eba-368c9a0b1c0d`);
    //<img src={qr} />
    return qr
}

export async function connect() {
    const klipSDK = require("klip-sdk");
    const res = await klipSDK.prepare.auth({ bappName: "Klub" });
    klipSDK.request(res.request_key, async () => {
        const qr = await QRCode.toDataURL(`https://klipwallet.com/?target=/a2a?request_key=${res.request_key}`);
        // console.log(qr)
        const price = await fetch(`https://a2a-api.klipwallet.com/v2/a2a/prepare`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "bapp": { "name" : "My BApp" },
                "type": "auth",
                "callback": {
                    "success": "/activities/success",
                    "fail": "/activities/failure",
                }
            })
        });
        console.log(price)
    });
    
    klipSDK.getCardList(res.request_key).then((r:any) => { console.log(r) });
    // console.log(res.chain_id);
}