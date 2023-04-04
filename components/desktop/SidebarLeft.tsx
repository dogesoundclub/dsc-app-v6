import Link from "next/link";

export default function SidebarLeft() {
    return (
        <div style={{ width: "15%", background: "#C1C1C1", color: "#656565" }}>
            <div style={{ padding: "4%" }}>
            <h2>Popular Dogesound</h2>
            <div style={{ padding: "10px 0px 0px 0px" }}>
                <a href="https://opensea.io/assets/klaytn/0x252a59642c494db5d3645bca65a36e70e50bf85e/0" target="_blank">1. 비트코인은 인류 최대의 뻘짓입니...</a><br/>
                <a href="https://opensea.io/assets/klaytn/0x252a59642c494db5d3645bca65a36e70e50bf85e/1" target="_blank">2. 내가 개소리대회 당선되면 도사클...</a><br/>
                <a href="https://opensea.io/assets/klaytn/0x252a59642c494db5d3645bca65a36e70e50bf85e/2" target="_blank">3. 본인 월급이 메이트 하나값 안되는...</a><br/>
                <a href="https://opensea.io/assets/klaytn/0x252a59642c494db5d3645bca65a36e70e50bf85e/3" target="_blank">4. 대치동 APT 사는 것보다 도사클...</a><br/>
                <a href="https://opensea.io/assets/klaytn/0x252a59642c494db5d3645bca65a36e70e50bf85e/4" target="_blank">5. 메이트 안사</a><br/>
            </div>
            <div style={{ textAlign: "end" }}>
            <a href="https://opensea.io/collection/dsc-dogesound-winners" target="_blank">&gt;&gt;&gt;see more</a>
            </div>
            <div style={{ padding: "10px 0px 0px 0px" }}>
                <img src="/fbi_warning.png" style={{width: "100%"}}/>
            </div>
            <div style={{ position: "relative", fontSize: "5px", background: "#00000060", color: "#fff", left: "7px", top: "-15px" }}>
                Unless otherwise stated, the content of this page is licensed under<br></br>
                Creative Contents Attribution-Share Alike 4.0 International License
            </div>
            <div style={{ fontSize: "7px", textAlign: "center" }}>
                <Link href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="./CC_BY-SA_icon.png" style={{ width: "100px" }}/></Link>
            </div>
            <div style={{ fontSize: "7px", textAlign: "center" }}>
                DSC LABEL inc.
            </div>
            <div style={{ fontSize: "7px", textAlign: "center" }}>
                support@dsclabel.co.kr 
            </div>
            </div>
        </div>
    );
};