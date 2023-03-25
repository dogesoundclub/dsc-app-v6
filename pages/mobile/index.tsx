import React from 'react';
import Modal from '../../components/modal/MobileModalPortal';
import MobileNav from '../../components/mobile/MobileNav';
import Dogesound from "../../components/mobile/Dogesound";
import Fixed from "../../components/mobile/fixed";
import Banner1 from "../../components/mobile/banner1";
import Banner2 from "../../components/mobile/banner2";
import Banner3 from "../../components/mobile/banner3";

const MobileHome = () => {
  return (
    <div style={{maxWidth: "425px", margin: "0 auto", background: "#D9D9D9"}}>
      <Modal></Modal>
      <div>
        <img src="dogesoundclub_mobile.png" style={{width: "100%"}}/>
      </div>
      <Dogesound></Dogesound>
      <MobileNav></MobileNav>
      <Fixed></Fixed>
      <Banner1></Banner1>
      <Banner2></Banner2>
      <Banner3></Banner3>
      <div style={{padding: "10px", color: "#000"}}>
        <br/>
        Doge Sound Club (DSC) is a collaboratable fiction based on the initial settings like the world we live is a giant simulation and like ordinary nonsencial jokes among people can make bugs and the result, break the world and make you free.
        <br/><br/>
        DSC is also used as the name of our club. DSC is a community where anybody can be a creator and can contribute in worldview for next generation by writing, drawing or coding.
        <br/><br/>
        We are using Git to do this type of collaboration. 
        <br/><br/>
        Why write the fiction using Git?
        <br/><br/>
        We hoped that our fiction would be continuously redeveloped regardless of the existence of the team, like a legend, hoped this fiction eternally live and grow.
        <br/><br/>
        Fiction
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
        <br/><br/>
        <span style={{color: "#838383", fontSize: "13px"}}>@2023 DSC LABEL inc. support@dsclabel.co.kr</span>
      </div>
      {/* <div>Welcome to Mobile version of Doge Sound Club!</div> */}
    </div>
  );
};

export default MobileHome;