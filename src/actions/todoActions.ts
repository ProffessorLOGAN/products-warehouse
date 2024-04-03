"use server";
import { revalidateTag } from "next/cache";
import { TodoList } from "../../typings";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createTodoDatabase = async (e: FormData) => {
 
  const todoText = e.get("todoText")?.toString();
  console.log(todoText);

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
