import MainLayout from "../components/MainLayout";
import SidebarLeft from "../components/desktop/SidebarLeft";
import SidebarRight from "../components/desktop/SidebarRight";
import Dogesound from "../components/desktop/Dogesound";
import { Alegreya_Sans } from 'next/font/google'
import Modal from '../components/modal/ModalPortal';

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
              <a href="https://discord.gg/dogesoundclub"><img src="/sns/discord.png" style={{width: "32px"}}/></a>
              <a href="https://www.instagram.com/dogesoundclub/"><img src="/sns/instagram.png" style={{width: "32px"}}/></a>
              <a href="https://twitter.com/dogesoundclub"><img src="/sns/twitter.png" style={{width: "32px"}}/></a>
              <a href="mailto:support@dsclabel.co.kr"><img src="/sns/email.png" style={{width: "32px"}}/></a>
              <a href="https://t.me/dogesoundclub"><img src="/sns/telegram.png" style={{width: "32px"}}/></a>
              <a href="https://www.youtube.com/@dosocl"><img src="/sns/youtube.png" style={{width: "32px"}}/></a>
            </div>
          </div>
          <div style={{overflow:"scroll", height: "60vh", padding: "20px"}}>
            <div className={alegreya_Sans.className} style={{fontSize: "24px"}}>
            <br/>
            Doge Sound Club (DSC) is a collaboratable fiction based on the initial settings like the world we live is a giant simulation and like ordinary nonsencial jokes among people can make bugs and the result, break the world and make you free.
            <br/><br/>
            DSC is also used as the name of our club. DSC is a community where anybody can be a creator and can contribute in worldview for next generation by writing, drawing or coding.
            <br/><br/>
            We are using Git to do this type of collaboration. 
            <br/><br/>
            <span className={alegreya_Sans_bold.className}>Why write the fiction using Git?</span>
            <br/><br/>
            We hoped that our fiction would be continuously redeveloped regardless of the existence of the team, like a legend, hoped this fiction eternally live and grow.
            <br/><br/>
            <span className={alegreya_Sans_bold.className}>Fiction</span>
            <br/><br/>
            There was a group of people who believed that Earth was a giant simulation. But most people didn't believe this. So they were just thought of as people with a strange idea.
            <br/><br/>
            Those of minor faith believers called each other ‘Mates’. Mates stood by their beliefs that sounded like jokes, regardless of uncomfortable stares.
            <br/><br/>
            From one day, discontinuous points, called cracks, appeared all over the earth. If you put one hand through the mailbox opening of one of crack points, the same hand will come out of the school locker on the other side of the world.
            <br/><br/>
            There was nothing dangerous, but the phenomenon that was not able to be guessed the causal relationship kept happening.
            <br/><br/>
            These cracks were photographed as funny memes such as 'physics engine is broken' and circulated on the Internet, and as time passed, they began to be accepted as real phenomena rather than synthetic ones. The claims of the Mates that the world is a simulation are gradually gaining credibility based on Crack. Mates became large groups of 10,000 people.
            <br/><br/>
            Earth's AI guardian, Chronium, noticed that the cracks happen due to Mates who realized the earth is a simulation.
            <br/><br/>
            Mates have meetings periodically, avoiding the surveillance of Chronium, and holding meetings in the other world, Cryptovoxels, where all data and existence visualized and represented in the form of voxels so that Chronium cannot disguise and infiltrate.
            <br/><br/>
            (…)
            <br/><br/>
            For more episodes...
            <br/>
            <a href="https://github.com/dogesoundclub"><span style={{textDecoration: "underline"}}>Go to the repo.</span></a> (Github)
            </div>
          </div>
        </div>
        <SidebarRight></SidebarRight>
      </div>
    </MainLayout>
  );
};

export default AboutPage;