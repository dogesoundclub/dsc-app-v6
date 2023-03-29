import * as React from 'react';
import { useState, useRef } from 'react'
import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    right: 0;
    background: #ffffff;
`


const Fixed = () => {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(true);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  return open ? <>
                    <Box>
                    {isPlaying ? (
                      <a onClick={handleStop}><img src="./stop.png"/></a>
                    ) : (
                      <a onClick={handlePlay}><img src="./musicBtn.png"/></a>
                    )}
                  </Box>
                </> 
    :(
    <>
    <audio ref={audioRef}>
    <source src="./Caro.mp3" type="audio/mpeg" />
  </audio>

    <div style={{maxWidth: "425px"}}>
      <Box>
          <div>
            {isPlaying ? (
              <a onClick={handleStop}><img src="./stop.png" style={{width:"32px"}}/></a>
            ) : (
              <a onClick={handlePlay}><img src="./musicBtn.png" style={{width:"32px"}}/></a>
            )}
          </div>
          <div style={{background: "#00000080", fontSize: "25px", padding: "2px", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
            <a onClick={handleClose} style={{color: "white", fontSize: "10px"}}>X</a>
          </div>
          <a href="https://discord.gg/dogesoundclub" target='_blank'><img src="/sns/discord.png" style={{width: "32px"}}/></a>
          <a href="https://www.instagram.com/dogesoundclub/" target='_blank'><img src="/sns/instagram.png" style={{width: "32px"}}/></a>
          <a href="https://twitter.com/dogesoundclub" target='_blank'><img src="/sns/twitter.png" style={{width: "32px"}}/></a>
          <a href="mailto:support@dsclabel.co.kr" target='_blank'><img src="/sns/email.png" style={{width: "32px"}}/></a>
          <a href="https://t.me/dogesoundclub" target='_blank'><img src="/sns/telegram.png" style={{width: "32px"}}/></a>
          <a href="https://www.youtube.com/@dosocl" target='_blank'><img src="/sns/youtube.png" style={{width: "32px"}}/></a>
          <a href="https://github.com/dogesoundclub" target='_blank'><img src="/github.png" style={{width: "32px"}}/></a>
          <a href="https://opensea.io/collection/dogesoundclub-mates" target='_blank'><img src="/opensea.png" style={{width: "32px"}}/></a>
      </Box>
    </div>
    </>
  );
};
export default Fixed;