"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/turso";
import { parseDescription } from "@/lib/todo-input";

export const addTodo = async (formData: FormData) => {
  const description = parseDescription(formData.get("description"));
  if (description === null) return;

  await db.execute({
    sql: "INSERT INTO todos (description) VALUES (?)",
    args: [description],
  });

  revalidatePath("/");
};

export const removeTodo = async (formData: FormData) => {
  await db.execute({
    sql: "DELETE FROM todos WHERE id = ?",
    args: [formData.get("id") as string],
  });

  revalidatePath("/");
};
