import { printTodoDatabase } from "@/actions/todoActions";
import React from "react";
import Delete from "./Delete";
import { TodoList } from "../../typings";

const TodoLists = async () => {
  const Lists = await printTodoDatabase();

  return (
    <>
      {Lists.map((List: TodoList) => (
        <div
          key={List.id}
          className="flex border border-gray-400 flex-wrap py-2 mb-1 text-md justify-center gap-10 bg-white shadow-2xl"
        >
          <p className="border px-4 border-gray-500">{List.todoText} </p>
          <Delete id={List.id} />
        </div>
      ))}
    </>
  );
};

export default TodoLists;
