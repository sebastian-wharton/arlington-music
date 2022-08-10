import Image from "next/image";
import concert from "../public/images/concert.jpg";
import guitar from "../public/images/guitar.jpg";
import man from "../public/images/man.jpg";
import Navbar from "../comps/NavBar";


export default function Home() {
  return (
    <>
      
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2>Arlington Music is officially operational! Woohoo!</h2>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={concert}
          alt="Mansfield Family Dentistry Logo"
          layout="fill"
          priority
        />
      </div>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={man}
          alt="Picture of smiling woman"
          layout="fill"
          priority
        />
      </div>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={guitar}
          alt="Picture of smiling woman"
          layout="fill"
          priority
        />
      </div>
    </>
  );
}
