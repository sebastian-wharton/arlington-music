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
          <div className="absolute left-24 top-36 text-2xl">
            Invent your style,
          </div>
          <div className="absolute left-32 top-52 text-2xl">
            Create your sound,
          </div>
          <div className="absolute left-40 top-72 text-2xl">
            Share your voice.
          </div>
          <div className="absolute right-14 top-96 text-2xl">
            The power of music
          </div>
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
      <h2 className="bg-Thgray text-center p-2 font-medium text-2xl">
        Limited Time Deals!
      </h2>
      <div className="flex w-screen mx-auto bg-Thgray">
        <AdCard />
        <AdCard />
        <AdCard />
      </div>

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
