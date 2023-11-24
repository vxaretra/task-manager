"use server";

import prisma from "@/lib/database";
import { Status } from "@prisma/client";
import { redirect } from "next/navigation";

async function getAllTasks() {
  const tasks = await prisma.task.findMany();
  return tasks;
}

async function createNewTask(formData: FormData) {
    let status: Status;
    switch (formData.get("status")) {
      case "DONE":
        status = Status.DONE;
        break;
      case "INPROGRESS":
        status = Status.INPROGRESS;
        break;
      case "TODO":
      default:
        status = Status.TODO;
        break;
    }

    await prisma.task.create({
      data: {
        task: String(formData.get("task")) || "unknown task",
        description: String(formData.get("description")) || "unknown description",
        status: status,
      }
    })

    redirect("/tasks");
}


async function updateTask(id: number, formData: FormData) {
  let status: Status;
  switch (formData.get("status")) {
    case "DONE":
      status = Status.DONE;
      break;
    case "INPROGRESS":
      status = Status.INPROGRESS;
      break;
    case "TODO":
    default:
      status = Status.TODO;
      break;
  }

  await prisma.task.update({ where: { id: id }, data: { status: status }});

  redirect("/tasks");
}

async function deleteTask(id: number, _: FormData) {
  await prisma.task.delete({ where: { id: id } });

  redirect("/tasks");
}

export { createNewTask, getAllTasks, updateTask, deleteTask };
