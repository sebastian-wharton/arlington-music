import Link from "next/link";
import Image from "next/image";
import plax3 from "../images/guitar.jpg";

const AdCard = () => {
  return (
    <div className="border-2 ">
      <h2 className="">Advert</h2>
      <p className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ipsum
        nam, repellat debitis repudiandae rem.
      </p>

      <div className="opacity-0 border-2 border-red-900 h-5 w-5">
        {/* <Image src={plax3} alt="picture of" width={100%} height="auto" /> */}
      </div>
    </div>
  );
};

export default AdCard;
