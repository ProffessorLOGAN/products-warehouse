import { createTodoDatabase } from "@/actions/todoActions";
import React from "react";

const todo = async () => {



  return (
    <>
      <form
        action={createTodoDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-10 border border-gray-200 shadow-2xl mt-10 mb-6"
      >
        <input
          className="border border-gray-300 p-2 rounded-sm"
          type="text"
          placeholder="Add work to do"
          name="product"
        />

        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Todo
        </button>
      </form>

      <h2 className="flex justify-center text-2xl  font-bold py-3 ">
        TodoLists
      </h2>
      <hr className="py-3 " />
    </>
  );
};

export default todo;
