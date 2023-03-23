import Image from 'next/image'
const SidebarLeft = () => {
    return (
        <div style={{ flexBasis: "15%", textAlign: "center", background: "#C1C1C1" }}>
            <img src="/login.png" style={{width: "100%"}}/>
            <img src="/banner.gif" style={{width: "100%"}}/>
            <img src="/engine.gif" style={{width: "100%"}}/>
        </div>
    );
};
export default SidebarLeft;