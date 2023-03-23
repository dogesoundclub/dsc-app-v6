import MainLayout from "../components/MainLayout";
import SidebarLeft from "../components/desktop/SidebarLeft";
import SidebarRight from "../components/desktop/SidebarRight";
import styles from '@/styles/desktop/Gallery.module.css';

const ReadyPage = () => {
    return (
      <MainLayout>
        <h1>Sorry, We’re under construction</h1>
        <span>
            But we bet something good is coming.<br/>
            If you want to know more about us, follow us until we’re ready.<br/>
            We will get back ASAP!<br/>
        </span>
        <button>Our Twitter</button>
        <button>Our Discord</button>
        <button>Back to home</button>
        <img src="/construction.png" style={{width: "50%"}}/>
      </MainLayout>
    );
  };
  
  export default ReadyPage;