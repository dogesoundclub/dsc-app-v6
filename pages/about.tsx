import MainLayout from "../components/MainLayout";
import SidebarLeft from "../components/desktop/SidebarLeft";
import SidebarRight from "../components/desktop/SidebarRight";
import Dogesound from "../components/desktop/Dogesound";
import { Alegreya_Sans } from "next/font/google"
import Modal from "../components/modal/ModalPortal";

const alegreya_Sans = Alegreya_Sans({ 
  weight: '400',
  subsets: ['latin']
})
const alegreya_Sans_bold = Alegreya_Sans({ 
  weight: '800',
  subsets: ['latin']
})

const AboutPage = () => {

  return (
    <MainLayout>
      <Modal></Modal>
      <div style={{ display: "flex" }}>
        <SidebarLeft></SidebarLeft>
        <div style={{ flexBasis: "70%", background: "#fff", color: "#000"}}>
          <Dogesound></Dogesound>
          <div style={{display: "flex", justifyContent: "space-between", padding: "20px"}}>
            <span style={{color: "#36B167", fontSize: "2em"}}>About</span>
            <div>
              <a href="https://github.com/dogesoundclub" target='_blank'><img src="/github.png" style={{width: "32px"}}/></a>
              <a href="https://opensea.io/collection/dogesoundclub-mates" target='_blank'><img src="/opensea.png" style={{width: "32px"}}/></a>
              <a href="https://discord.gg/dogesoundclub" target='_blank'><img src="/sns/discord.png" style={{width: "32px"}}/></a>
              <a href="https://www.instagram.com/dogesoundclub/" target='_blank'><img src="/sns/instagram.png" style={{width: "32px"}}/></a>
              <a href="https://twitter.com/dogesoundclub" target='_blank'><img src="/sns/twitter.png" style={{width: "32px"}}/></a>
              <a href="mailto:support@dsclabel.co.kr" target='_blank'><img src="/sns/email.png" style={{width: "32px"}}/></a>
              <a href="https://t.me/dogesoundclub" target='_blank'><img src="/sns/telegram.png" style={{width: "32px"}}/></a>
              <a href="https://www.youtube.com/@dosocl" target='_blank'><img src="/sns/youtube.png" style={{width: "32px"}}/></a>
            </div>
          </div>
          <div style={{overflow:"scroll", height: "60vh", padding: "20px"}}>
            <div className={alegreya_Sans.className} style={{fontSize: "24px"}}>
            <br/>
            Welcome to the Doge Sound Club (DSC), a friendly community that embraces creativity and collaboration through the use of generative Non-Fungible Tokens (NFTs) and an open-license approach.
            <br/><br/>
            Doge Sound Club is centered around the concept of &quot;Doge Sound,&quot; which playfully refers to nonsensical jokes and sayings, known as &quot;Gaesori&quot; in Korean. The term &quot;Doge Sound&quot; derives from the Korean words &quot;Gae&quot; (meaning dog) and &quot;Sori&quot; (meaning sound), signifying lighthearted, entertaining conversations.
            <br/><br/>
            Our project started in July 2021 with the launch of Korea&apos;s first generative NFTs called Doge Sound Club Mates. These unique digital collectibles form the basis for our membership activities and foster a sense of belonging within the community.
            <br/><br/>
            DSC is committed to fostering a creative environment where everyone can contribute, regardless of their background or skill set. We believe in the importance of an open-license approach, ensuring that our stories and content are available for anyone to use and build upon without restrictions.
            <br/><br/>
            To support our open-license philosophy, all DSC content follows the Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0) license, unless otherwise stated. 
            <br/><br/>
            Our community members are encouraged to create and share their work using a variety of mediums, such as writing, drawing, or coding. To facilitate this collaborative process, we use Git, a version control system that allows for seamless cooperation and the continuous development of our collective stories.
            <br/><br/>

            <span className={alegreya_Sans_bold.className} style={{ fontSize: "3rem" }}>TOY DAPP</span>
            <br/><br/>
            At Doge Sound Club (DSC), we also develop Toy Decentralized Applications (Toy DApps) to make blockchain technology more accessible and enjoyable for everyone, regardless of their knowledge about the blockchain. These playful dApps may not have specific utility, but they provide a fun, engaging experience for users.
            <br/><br/>
            One of our popular Toy DApps is the Doge Sound Contest. This competition combines blockchain technology with a Discord bot to host a monthly contest where participants submit their best &quot;Doge Sound&quot; entries. Doge Sound refers to nonsensical jokes and sayings, known as &quot;Gaesori&quot; in Korean. DSC community members vote for the most illogical and unpredictable submissions to select a winner.
            <br/><br/>
            The winning Doge Sound is then showcased on the main page of our website. Winners also have the opportunity to mint their Doge Sound as an NFT by clicking a button connected to the smart contract.
            <br/><br/>
            The idea behind hosting this unique contest is rooted in our project&apos;s fiction. The DSC community believes that the world is a simulation, and that inconsistent or unpredictable sayings and actions often cause bugs in the simulation. These bugs serve as clues that the world is a simulation. To encourage the discovery and exploration of these bugs, we&apos;ve been running the Doge Sound Contest on the Klaytn blockchain since 2021.
            <br/><br/>
            By developing and promoting Toy DApps like the Doge Sound Contest, DSC aims to create a fun and inclusive environment for users to engage with blockchain technology, fostering curiosity and creativity within our community.
            <br/><br/>
            <span className={alegreya_Sans_bold.className} style={{ fontSize: "3rem" }}>MISSION</span>
            <br/><br/>
            Our ultimate mission at Doge Sound Club is to create a world where everyone can be a creator, unrestricted by licensing barriers or other limitations. We aim to make it easy for ordinary people to express their creativity and contribute to a shared universe of stories and experiences.
            <br/><br/>
            To learn more about the Doge Sound Club, our team, and our various NFT offerings, please visit our website and join our vibrant community.
            <br/><br/>
            </div>
          </div>
        </div>
        <SidebarRight></SidebarRight>
      </div>
    </MainLayout>
  );
};

export default AboutPage;