import MainLayout from "../components/MainLayout";
import SidebarLeft from "../components/desktop/SidebarLeft";
import SidebarRight from "../components/desktop/SidebarRight";
import styles from '@/styles/desktop/Ready.module.css';
import { Abel, Yantramanav } from 'next/font/google'

const abel = Abel({ 
  weight: '400',
  subsets: ['latin']
})

const ReadyPage = () => {
    return (
      <MainLayout>
        <div className={styles.div}>
          <h1>Sorry, We’re under construction</h1>
          <span>
              But we bet something good is coming.<br/>
              If you want to know more about us, follow us until we’re ready.<br/>
              We will get back ASAP!<br/>
          </span>
          <button><a href="https://twitter.com/dogesoundclub">Our Twitter</a></button>
          <button><a href="https://discord.gg/dogesoundclub">Our Discord</a></button>
          <button><a href="/">Back to home</a></button>
          <img src="/construction.png" style={{width: "500px"}}/>
        </div>
      </MainLayout>
    );
  };
  
  export default ReadyPage;