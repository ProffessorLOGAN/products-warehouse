"use server";
import { revalidateTag } from "next/cache";
import { TodoList } from "../../typings";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createTodoDatabase = async (e: FormData) => {
  const todoText = e.get("todoText")?.toString();

  if (!todoText) return;

  try {
    const createTodo = await prisma.todoList.create({
      data: {
        todoText,
      },
    });
    console.log(createTodo);
  } catch (error) {
    console.log(error);
  }
  revalidateTag("TodoLists");
};

export const printTodoDatabase = async () => {
  try {
    const todoLists = await prisma.todoList.findMany();
    console.log(todoLists);
  } catch (error) {
    console.log(error);
  }
};

// createTodoDatabase(e: FormData)
//   .catch((e) => {
//     console.error(e.message);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// {
//     method: "POST",
//     body: JSON.stringify(newProduct),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   revalidateTag("products");
