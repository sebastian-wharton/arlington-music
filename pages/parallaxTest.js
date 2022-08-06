import Image from "next/image";
import { useRef } from "react";
import concert from "./assets/concert.jpg";
import man from "./assets/man.jpg";
import guitar from "./assets/guitar.jpg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const App = () => {
  const ref = useRef();
  return (
    <div>
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            backgroundSize: "cover",
          }}
        >
          <img src={concert} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.7}
          style={{ backgroundSize: "cover" }}
        >
          <img src={man} />

          <h2>Title</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5} style={{}}></ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
{
  /* <h1>Invent your style, </h1>
          <h1>Create your sound,</h1>
          <h1>Share your voice.</h1> */
}
