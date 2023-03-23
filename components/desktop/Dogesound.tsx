import React, { useState, useEffect } from 'react';

const Dogesound = () => {
    const [isData, setData] = useState('');
    const [isMix, setMix] = useState('');

    async function getDogesound(){
        const res = await fetch("https://api.dogesound.club/dogesoundwinner")
        const data = await res.json()
        setData(data.dogesound)
    }
    async function getMixprice(){
        const res = await fetch("https://api.dogesound.club/mix/price")
        const data = await res.json()
        setMix(data)

    }

    useEffect(()=>{
        getDogesound()
        getMixprice()
    },[])

    return (
        <>
            <div>
                {isData} 믹스 금액: {isMix}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div><img src="/banner1.png" style={{width: "100%"}}/></div>
                <div><img src="/banner2.png" style={{width: "100%"}}/></div>
            </div>
        </>
    );
  };
  export default Dogesound;