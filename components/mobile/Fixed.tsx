import { useState, useRef } from "react"

export default function Fixed() {

  const [open, setOpen] = useState(false);
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
                    <div style={{ display: "flex", position: "fixed", flexDirection: "column", right: 0, background: "#fff" }}>
                    {isPlaying ? (
                      <a onClick={handleStop}><img src="./stop.png"/></a>
                    ) : (
                      <a onClick={handlePlay}><img src="./musicBtn.png"/></a>
                    )}
                  </div>
                </> 
    :(
    <>
    <audio ref={audioRef}>
    <source src="./Caro.mp3" type="audio/mpeg" />
  </audio>

    <div style={{ maxWidth: "425px" }}>
      <div style={{ display: "flex", position: "fixed", flexDirection: "column", right: 0, background: "#fff" }}>
          <div>
            {isPlaying ? (
              <a onClick={handleStop}><img src="./stop.png" style={{ width:"32px" }}/></a>
            ) : (
              <a onClick={handlePlay}><img src="./musicBtn.png" style={{ width:"32px" }}/></a>
            )}
          </div>
          <div style={{ background: "#00000080", fontSize: "25px", padding: "2px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <a onClick={handleClose} style={{ color: "white", fontSize: "10px" }}>X</a>
          </div>
          <a href="https://discord.gg/dogesoundclub" target="_blank"><img src="/icon/discord.png" style={{ width: "32px" }} /></a>
          <a href="https://www.instagram.com/dogesoundclub/" target="_blank"><img src="/icon/instagram.png" style={{ width: "32px" }} /></a>
          <a href="https://twitter.com/dogesoundclub" target="_blank"><img src="/icon/twitter.png" style={{ width: "32px" }}/></a>
          <a href="mailto:support@dsclabel.co.kr" target="_blank"><img src="/icon/email.png" style={{ width: "32px" }} /></a>
          <a href="https://t.me/dogesoundclub" target="_blank"><img src="/icon/telegram.png" style={{ width: "32px" }} /></a>
          <a href="https://www.youtube.com/@dosocl" target="_blank"><img src="/icon/youtube.png" style={{ width: "32px" }} /></a>
          <a href="https://github.com/dogesoundclub" target="_blank"><img src="/icon/git.png" style={{ width: "32px" }} /></a>
          <a href="https://opensea.io/collection/dogesoundclub-mates" target="_blank"><img src="/icon/opensea.png" style={{ width: "32px" }} /></a>
      </div>
    </div>
    </>
  );
};