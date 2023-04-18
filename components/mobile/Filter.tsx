import MateParts from "@/pages/MateParts.json"
import { useStateStore } from "@/components/utils/StateStore";
// {Object.entries(MateParts).map(([key, values]) => (
//   <ul>{key}<img src="./one.png"/>
//     {values.map((item) => (
//     <li style={{display: "none"}}>{item} </li>
//     ))}
//   </ul>
// ))}
export default function Filter() {

  const StateStore = useStateStore();

  const Close = () => StateStore.setfilter(true);
  if(StateStore.filter) return <></>;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#9F9F9F",
        // backdropFilter: "brightness(0.5)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
    }}
    >
      <div style={{ margin: "32px", width: "300px" }}>
        <div style={{ padding: "12px 3px 12px 3px", color: "#ffffff" }}>
          <div style={{ textAlign: "right" }}><a onClick={ Close } style={{ color: "#ffffff" }}>X</a></div>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>MY MATES</div>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>FACE</div>
            <button style={{ color: "#000000" }}>Female</button>
            <button style={{ color: "#000000" }}>Male</button>
            <button style={{ color: "#000000" }}>Monkey</button>
            <button style={{ color: "#000000" }}>Tiger</button>
            <button style={{ color: "#000000" }}>Robot</button>
            <button style={{ color: "#000000" }}>Rabbit</button>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>FACE DETAIL A</div>
            <button style={{ color: "#000000" }}>Sports</button>
            <button style={{ color: "#000000" }}>Orange Stripes</button>
            <button style={{ color: "#000000" }}>Green Cyclops Eye</button>
            <button style={{ color: "#000000" }}>Mouth Spot</button>
            <button style={{ color: "#000000" }}>None</button>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>FACE DETAIL B</div>
            <button style={{ color: "#000000" }}>Red Lip</button>
            <button style={{ color: "#000000" }}>Smile</button>
            <button style={{ color: "#000000" }}>Clown Mouth</button>
            <button style={{ color: "#000000" }}>Frightened Mouth</button>
            <button style={{ color: "#000000" }}>Purple Lip</button>
            <button style={{ color: "#000000" }}>None</button>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>NECK</div>
            <button style={{ color: "#000000" }}>Choker</button>
            <button style={{ color: "#000000" }}>Silver Chain</button>
            <button style={{ color: "#000000" }}>Gold Chain</button>
            <button style={{ color: "#000000" }}>Red Scarf</button>
            <button style={{ color: "#000000" }}>None</button>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>MOUTH</div>
            <button style={{ color: "#000000" }}>Medical Mask</button>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>EYES</div>
            <button style={{ color: "#000000" }}>Ski Google</button>
            <button style={{ color: "#000000" }}>Orange Eyebrow</button>
            <button style={{ color: "#000000" }}>Nerd Glasses</button>
            <button style={{ color: "#000000" }}>Normal Glasses</button>
            <button style={{ color: "#000000" }}>Shade Glasses</button>
            <button style={{ color: "#000000" }}>Horned Rim Glasses</button>
            <button style={{ color: "#000000" }}>VR Rainbow LED</button>
            <button style={{ color: "#000000" }}>VR Jade LED</button>
            <button style={{ color: "#000000" }}>Blue Clown Eyes</button>
            <button style={{ color: "#000000" }}>Red Clown Eyes</button>
            <button style={{ color: "#000000" }}>I dont know Eyes</button>
            <button style={{ color: "#000000" }}>None</button>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>FORHEAD</div>
            <button style={{ color: "#000000" }}>Red Victory Band</button>
            <button style={{ color: "#000000" }}>2 Colors band</button>
            <button style={{ color: "#000000" }}>None</button>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>HEADWEAR</div>
            <button style={{ color: "#000000" }}>None</button>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>HEADWEAR DETAILS</div>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>EARS</div>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>ITEMS</div>
        </div>
      </div>
    </div>
  );
};