const CartItem = () => {
  return (
    <>
      <div className="h-36 w-full flex bg-Thwhite border-b-Thblack border-b-2 ">
        <div className="box h-5/6 w-40 min-w-[160px] bg-Thred align-middle my-auto m-6"></div>
        <div className="flex flex-col">
          <h1 className="float-left text-left font-bold font-mono text-2xl block pt-2">
            Product
          </h1>
          <h1 className="float-right  text-[#ff5757]">299.99</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ducimus
            facilis nam cum, deleniti omnis atque incidunt quibusdam! Nihil quae
            cupiditate impedit deserunt officia?
          </p>
          <button>
            <a href="#">Remove</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
