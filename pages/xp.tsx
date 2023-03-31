import "xp.css/dist/XP.css";

export default function XPPage() {
    return (
    <div className="window" style={{margin: "32px", width: "300px"}}>
        <div className="title-bar" style={{padding: "12px 3px 12px 3px"}}>
        <div className="title-bar-text">
            DSC Holder Certification
        </div>

        <div className="title-bar-controls">
            <button aria-label="Close"></button>
        </div>
        </div>
        <div className="window-body">
        <section className="field-row" style={{justifyContent: "center"}}>
            <img src="/certification/klaytnsuccess.png" style={{width:"32px"}}/>
            <p>Certification successfully finished!</p>
        </section>
        <section className="field-row" style={{justifyContent: "center"}}>
            <button style={{color:"#000000"}}>OK</button>
        </section>
        </div>
    </div>
    );
}