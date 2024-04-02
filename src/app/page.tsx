import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export interface Product {
  id?: number;
  product: string;
  price: string;
}
export default async function Home() {
  const res = await fetch(
    "https://660c22163a0766e85dbd7d9e.mockapi.io/products",
    {
      cache: "no-cache",
    }
  );
  const products: Product[] = await res.json();

  const addProductToDatabase = async (e: FormData) => {
const product = e.get("product")?.toString();
const price = e.get("price")?.toString();
  }

  return (
    <main>
      <h1 className="text-3xl font-bold text-center bg-blue-300 text-">
        {" "}
        Product Warehouse
      </h1>
      <form action={addProductToDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input
          className="border border-gray-300 p-2 rounded-sm"
          type="text"
          placeholder="Add Product Name"
        />
        <input
          className="border border-gray-300 p-2 rounded-sm"
          type="text"
          placeholder="Add Product Price"
        />

        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>

      <h2 className="flex justify-center   font-bold p-5 ">
        Lists of Products
      </h2>

      <div className="flex flex-wrap ml-5 gap-5 bg-white">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col bg-gray-100 shadow">
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
    </main>
  );
}
