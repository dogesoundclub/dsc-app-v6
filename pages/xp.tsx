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
            <img src="/klaytnsuccess.png" style={{width:"32px"}}/>
            <p>Certification successfully finished!</p>
        </section>
        <section className="field-row" style={{justifyContent: "center"}}>
            <button style={{color:"#000000"}}>OK</button>
        </section>
        </div>
    </div>
    );
}

{/* <div className="window" style={{margin: "32px", width: "250px"}}>
<div className="title-bar">
  <div className="title-bar-text">
    My First Program
  </div>

  <div className="title-bar-controls">
    <button aria-label="Minimize"></button>
    <button aria-label="Maximize"></button>
    <button aria-label="Close"></button>
  </div>
</div>
<div className="window-body">
  <p>Hello, world!</p>
  <section className="field-row" style={{justifyContent: "flex-end"}}>
    <button>OK</button>
    <button>Cancel</button>
  </section>
</div>
</div> */}