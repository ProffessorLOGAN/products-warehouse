export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center bg-blue-300 text-">
        {" "}
        Product Warehouse
      </h1>
      <form className="flex flex-col size-48">
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
        <input
          className="border border-gray-300 p-2 rounded-sm"
          type="text"
          placeholder="Add Product image Url"
        />
        <button>Add Product</button>
      </form>
    </main>
  );
}
