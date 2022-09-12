import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <h1>Arlington Music</h1>
      </div>
      {/* Links */}
      <div className="links">
        <Link href="/">
          <a className="pr-3">Home</a>
        </Link>
        <Link href="/about">
          <a className="pr-3">About</a>
        </Link>
        <Link href="/store/">
          <a className="pr-3">Store</a>
        </Link>
        <Link href="/store/cart">
          <a className="pr-3">Cart</a>
        </Link>
        <Link href="/store/[product]">
          <a className="pr-3">product</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
