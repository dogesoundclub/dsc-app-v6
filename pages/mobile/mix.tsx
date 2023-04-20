import Layout from "@/components/MobileLayout_Editing";

export default function Mix() {
    return (
        <>
        <Layout>
            <div style={{ width: "100%", color: "#000000", fontFamily: "Sunflower" }}>
                <img src="/mobile/mix/top.png"  style={{ width: "100%" }}/>
                <p style={{ fontSize: "23px", color: "#36B167", textDecorationLine: "underline" }}>MIX, the future of DSC</p>
                <p style={{ fontSize: "20px", margin: "10px 0" }}>MIX is a token for the hub of NFT projects, published by DSC. It will be used throughout the DSC website and will be used for liquidity supply and trading at Klayswap. MIX will also be used in the services of partner projects we promised to add features utilizing MIX.</p>
                <p style={{ fontSize: "23px", color: "#36B167", textDecorationLine: "underline" }}>MIX pool</p>
                <p style={{ fontSize: "20px", margin: "10px 0" }}>Mate Pool : Mate holders are the most active users in the DSC community, and if they have mates, they can be allocated MIX, and Mate holders must pay 10% of the accumulated MIX quantity in advance to receive the accumulated MIX. This increases the allocated volume of the MIX.</p>
                <p style={{ fontSize: "20px", margin: "10px 0" }}>Partner Pool : A partner pool is a pool allocated to projects in partnership with the MIX community. These projects will continue to add functions that utilize MIX. The withdrawal works the same as the mate.</p>
                <p style={{ fontSize: "20px", margin: "10px 0" }}>Klayswap Liquidity Pool : Allocate some of the issuance volumes to the liquidity pool in Klayswap. This raises the APR of the MIX pool in Klayswap, making the MIX token more fluid. The pool has two ways - Klay-MIX LP and KSP-MIX LP. </p>
                <p style={{ fontSize: "20px", margin: "10px 0" }}>Dev Pool : Development funds increase the use of MIX, such as development and marketing, and enable them to fulfill their responsibilities to achieve their given goals.</p>
                <p style={{ fontSize: "20px", margin: "10px 0" }}>To find more information &gt;&gt;&gt; <a href="https://github.com/mixplanet" target="_blank">Github</a></p>
                <p style={{ fontSize: "23px", color: "#36B167", textDecorationLine: "underline" }}>Governance</p>
                <p style={{ fontSize: "20px", margin: "10px 0" }}>We use our own Governance tool(bot) &gt;&gt;&gt; Snapshot.org</p>
                <p style={{ fontSize: "23px", color: "#36B167", textDecorationLine: "underline" }}>MIX MARKETPLACE</p>
                <img src="/mobile/mix/bottom.png" style={{ width: "100%"}}/>
            </div>
        </Layout>
        <style jsx>{`
        p { padding: 0 20px; }
        `}</style>
        </>
    );
}