import { deleteTodoDatabase } from "@/actions/todoActions";
import React from "react";

const Delete = ({ id }: { id: string }) => {
    const deleteTodoDatabaseId = deleteTodoDatabase.bind(null,id);
  return (
    <form action={deleteTodoDatabaseId}>
      <button className="border px-4 border-gray-700" >
        Delete
      </button>
    </form>
  );
};

export default Delete;
