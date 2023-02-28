import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/Home.module.css";
import b from "../public/b.jpg";
import waves from "../public/astro.webp";
import alien from "../public/alien.webp";

export default function Home() {
  const ref = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${b.src})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${waves.src})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={alien.src} alt="waves" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>K42</h2>
          <ConnectButton />
          <div></div>
          <div>
            <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
            <audio src="../public/alive.mp3" autoPlay={isPlaying} />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
