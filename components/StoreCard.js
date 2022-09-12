import Image from "next/image";

const StoreCard = () => {
  return (
    <>
      <div className="store h- w-[95%] bg-Thwhite mx-auto shadow-md">
        <div className="img max-w-full h-1/2 bg-Thred"></div>
        <div className="flex">
          <h3 className="text-left">Product</h3>
          <h4 className="text-right">199.99</h4>
        </div>

        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure
          nam hic, adipisci totam fugiat!
        </p>
      </div>
    </>
  );
};

export default StoreCard;
