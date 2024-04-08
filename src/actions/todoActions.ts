"use server";
import { revalidatePath, revalidateTag } from "next/cache";
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
  const todoList = await prisma.todoList.findMany();
  // console.log(todoList);
  return todoList;
};

export const deleteTodoDatabase = async (id: string) => {
  const todoList = await prisma.todoList.delete({
    where: {
      id,
    },
  });
  console.log(todoList);
  revalidatePath('/todo');
  return todoList;
};
