import Link from "next/link";
import Image from "next/image";
import plax3 from "../images/guitar.jpg";

const AdCard = () => {
  return (
    <>
      <div className="w-[32%] justify-center mx-auto p-2 bg-Thblack text-Thwhite">
        <div className="img w-[90%] h-[150px] bg-Thred justify-center mx-auto mt-2"></div>
        <h3 className="text-center text-lg">Ad card</h3>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          placeat magni nulla quo veniam harum vel obcaecati a earum blanditiis.
        </p>
      </div>
    </>
  );
};

export default AdCard;
