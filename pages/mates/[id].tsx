import { NextPageContext } from "next";
import MainLayout from "@/components/MainLayout";
import SidebarLeft from "@/components/desktop/SidebarLeft";
import SidebarRight from "@/components/desktop/SidebarRight";

export default function Example(props: { query: any }) {
    return (
        <MainLayout>
            <div style={{ display: "flex" }}>
                <SidebarLeft></SidebarLeft>
                    <div style={{ flexBasis: "70%", background: "#fff", color: "#000",  overflow:"scroll", height: "90vh", fontFamily:"Sunflower", textAlign: "center" }}>
                        <div>MATE #{props.query.id} - Kakun</div>
                        <div><img src="/pfp.png" /></div>
                        <button onClick={() => location.href="https://opensea.io/collection/dogesoundclub-mates/activity"} style={{ color: "#000" }}>Check OPENSEA</button>
                        <div>Social Media of MATE #{props.query.id}</div>
                        <input type="text" style={{ color: "#000" }}/>
                        <div>Messages for MATE #{props.query.id}</div>
                        <div style={{ padding: "100px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>Block #</div>
                                <div>Name</div>
                                <div>Message</div>
                                <div>Holder address</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>Block #</div>
                                <div>Name</div>
                                <div>Message</div>
                                <div>Holder address</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>Block #</div>
                                <div>Name</div>
                                <div>Message</div>
                                <div>Holder address</div>
                            </div>
                        </div>
                        <div>Lockable contents of MATE #{props.query.id}</div>
                        <div>Lockable contents is additional contents provided by this NFT. </div>
                        <div style={{ display: "flex", alignItems: "center", height: "100px" }}>
                            <div style={{ width: "33.3333%" }}>
                                <img src="/lock.jpg" alt="" style={{ width: "24px" }}/>
                            </div>
                            <div style={{ width: "33.3333%" }}>
                                <img src="/lock.jpg" alt="" style={{ width: "24px" }}/>
                            </div>
                            <div style={{ width: "33.3333%" }}>
                                <img src="/lock.jpg" alt="" style={{ width: "24px" }}/>
                            </div>
                        </div>
                        <div>Name my MATE</div>
                        <div>Give your mate a name. If you didn’t named your mate yet, just pay for the gas fee, and name it. But if you want to change it you have to pay 10mix. You cannot use the same name as other mate holders. Also, 20mix is required to delete the mate’s name. And the mate’s name will display in the gallery.</div>
                        <input type="text" />
                        <div>I understand and agree the term that I have to pay 10mix to change my mate’s name, and pay 20mix to delete it. I agree to take full responsibility for the disclosure of the submitted information (such as the wallet address of the owner of the mate,at the time of submission) and also the submitted name. I agree that I cannot ask a responsiblity to anyone for this tool I chose to access the Klaytn blockchain.</div>
                        <button style={{ color: "#000" }}>SUBMIT</button>
                        <div>Delete my Mate’s name</div>
                        <div>Add social media info</div>
                        <div>You can submit your Twitter and Instagram IDs to your mates here. If you submit your ID, you will be registered on the ‘Follow Me’ list and this information will be exposed through OpenSea Description. Change your pfp as our Mate, and follow other Twitter accounts submitted in ‘Follow Me’ list. They will recognize that you are one of our holders, and will follow you back to help you enter the larger world.</div>
                        <div>Twitter ID</div>
                        <input type="text" />
                        <div>Instagram ID</div>
                        <input type="text" />
                    </div>
                <SidebarRight></SidebarRight>
            </div>
        </MainLayout>
    );
}
Example.getInitialProps = ({ query }: NextPageContext) => {
    return { query };
};