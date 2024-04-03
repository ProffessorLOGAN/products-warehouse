import TodoForm from "@/components/TodoForm";
import TodoLists from "@/components/TodoLists";
import React from "react";

const todo = async () => {
  return (
    <>
      <TodoForm />
      <h2 className="flex justify-center text-2xl  font-bold py-3 ">
        TodoLists
      </h2>
      <hr className="py-3 " />
      <TodoLists />
    </>
  );
};

export default todo;
