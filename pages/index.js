import Head from "next/head";
import Image from "next/image";
import plax1 from "../images/concert.jpg";
import plax2 from "../images/man.jpg";
import plax3 from "../images/guitar.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arlington Music</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="relative w-full h-screen">
        <Image
          src={plax1}
          alt="picture  of concert"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-screen">
        <Image
          src={plax2}
          alt="picture  of concert"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-screen">
        <Image
          src={plax3}
          alt="picture  of concert"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
}
