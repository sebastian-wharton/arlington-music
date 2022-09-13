import Image from "next/image";

const StoreCard = () => {
  return (
    <>
      <div className="store bg-Thwhite text-Thblack shadow-md rounded-md max-w-1/5 m-1">
        <div className="img max-w-full h-1/2 bg-Thred"></div>
        <h3 className="text-left float-left p-2">Product</h3>
        <h4 className="text-right float-right p-2 ">199.99</h4>
        <br />
        <p className="text-center p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure
          nam hic, adipisci totam fugiat!
        </p>
      </div>
    </>
  );
};

export default StoreCard;
