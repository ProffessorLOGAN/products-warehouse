import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row flex-wrap justify-between py-3 border bg-blue-300 ">
        <div className=" ml-20 text-2xl font-bold ">
          <Link href="/">Product Warehouse</Link>
        </div>

        <ul className="flex flex-row mr-20 gap-5">
          <li className="font-semibold text-xl ">
            <Link href="/todo">TodoList</Link>
          </li>
          <li className="font-semibold text-xl ">
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
