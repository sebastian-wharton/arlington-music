import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AdCard from "../components/AdCard";
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
      <div className={styles.imgContainer}>
        <Image
          src={plax1}
          alt="picture of a rock concert"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.overlay}>
          <div className="left-0">Invent your style,</div>
          <div className="left-0">Create your sound,</div>
          <div className="left-0">Share your voice.</div>
          <div className="left-0">The power of music</div>
        </div>
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
