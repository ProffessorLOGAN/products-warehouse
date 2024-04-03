import React from "react";
import { Product } from "../../../typings";
import { addProductToDatabase } from "@/actions/serverActions";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const products = async () => {
  const res = await fetch(
    "https://660c22163a0766e85dbd7d9e.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );
  const products: Product[] = await res.json();
  return (
    <>
      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-10 border border-gray-200 shadow-2xl mt-10 mb-6"
      >
        <input
          className="border border-gray-300 p-2 rounded-sm"
          type="text"
          placeholder="Add Product Name"
          name="product"
        />
        <input
          className="border border-gray-300 p-2 rounded-sm"
          type="text"
          placeholder="Add Product Price"
          name="price"
        />

        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>

      <h2 className="flex justify-center text-2xl  font-bold py-3 ">
        Lists of Products
      </h2>
      <hr className="py-3 " />
      <div className="flex flex-wrap ml-5 gap-5 bg-white">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col bg-gray-100 shadow-2xl"
          >
            <Image
              className="mx-auto mt-2 mb-4"
              src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
              width={60}
              height={100}
              alt="Image"
            />
            <CardContent className="mx-auto">
              <p>₹ {product.price}</p>
            </CardContent>
            <CardFooter className="mx-auto">
              <p>{product.product}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default products;
