import { deleteTask, updateTask } from "@/actions/tasks/actions";
import TaskEditForm from "@/components/TaskEditForm";
import prisma from "@/lib/database";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function TaskDetailPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const task = await prisma.task.findFirst({ where: { id: parseInt(params.id) } });
  if (!task) {
    redirect("..");
  }

  return (
      <div className="mx-auto max-w-md min-h-screen flex flex-col justify-center align-middle gap-5">
        <Link className="w-fit px-2 border border-black" href={"/tasks"}>Back</Link>
        <TaskEditForm task={task} edit={updateTask.bind(null, id)} remove={deleteTask.bind(null, id)} />
      </div>
  );
}