import { usePopupStore } from "@/components/utils/PopupStore";

export default function Test() {

    const PopupStore = usePopupStore();
    const Close = () => PopupStore.setPopup1(true);

    if(PopupStore.popup1) return <></>;

    return (
    <div style={{ maxWidth: "425px", top: "30%", position: "absolute", marginLeft: "15px" }}>
        <div>
            <div style={{ background: "#00000080", fontSize: "15px", padding: "3px", textAlign: "right", width: "40%" }}>
                <a onClick={ Close } style={{ color: "white" }}>X</a>
            </div>
            <img src="/faq_mobile/popup.png" style={{ width: "40%" }}/>
        </div>
    </div>
    );
};