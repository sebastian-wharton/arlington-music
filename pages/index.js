import Head from "next/head";
import Image from "next/image";
import plax1 from "../images/concert.jpg";
import plax2 from "../images/man.jpg";
import plax3 from "../images/guitar.jpg";
import AdCard from "../components/AdCard";

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
          alt="picture of a rock concert"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="overlay">
        <h1 className="stag1">Invent your style,</h1>
        <h1 className="stag2">Create your sound,</h1>
        <h1 className="stag3">Share your voice.</h1>
        <h1 className="tagline">The power of music</h1>
      </div>
      <div className="relative w-full h-screen">
        <Image
          src={plax2}
          alt="picture of man playing a guitar"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="cardSection">
        <h2 className="text-white-700">Title</h2>
        <AdCard />
        <AdCard />
        <AdCard />
      </div>
      ;
      <div className="relative w-full h-screen">
        <Image
          src={plax3}
          alt="picture of a guitar"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
}
