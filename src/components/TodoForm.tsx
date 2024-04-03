import { createTodoDatabase } from '@/actions/todoActions'
import React from 'react'

const TodoForm = () => {
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
          name="todoText"
        />

        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Todo
        </button>
      </form>
   </>
  )
}

export default TodoForm