import { useState, useEffect } from "react";

export default function ApiTestPage() {

    const [result, setResult] = useState("");

    async function load(){
        try {
            const res = await fetch("/api/api",{
                // method: "POST",
                // headers: {
                //     "Content-Type": "application/json",
                // },
            });
            const data = await res.json();
            setResult(data.dogesound);
            console.log(data);
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(()=>{
        load()
    },[])
    

    return (
        <div>
            {result}
        </div>
    );
}