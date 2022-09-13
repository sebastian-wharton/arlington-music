import CartItem from "../../components/CartItem";

const Cart = () => {
  return (
    <>
      <button href="#" className="p-2 top-20">
        <h1 className="justify-center text-center absolute top-20 right-4 bg-Thred text-Thwhite p-2 rounded-xl shadow-sm">
          Checkout
        </h1>
        <h1 className="top-20 text-Thblack">Home > Store > Cart</h1>
      </button>
      <h3 className="float-right text-Thblack">Total: </h3>
      <div className="cartItems top-28 relative m-2 p-6 justify-center mx-auto ">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </>
  );
};

export default Cart;
