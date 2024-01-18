import { getAllTasks } from "@/actions/tasks/actions";
import TaskCard from "@/components/TaskCard";
import Link from "next/link";

export default async function TasksPage() {
  const tasks = await getAllTasks();

  return (
    <main className="flex-grow">
      <div className="w-2/3 mx-auto mt-6 flex flex-col gap-4">
        <header className="mt-8 text-center">
          <h1 className="text-5xl font-semibold">Tasks List</h1>
        </header>
        <Link className="w-fit px-2 border border-black" href={"/tasks/new"}>Add New Task +</Link>
        <div className="p-4 border border-black grid grid-cols-3 justify-items-center gap-y-4">
          {tasks.map((task) => <TaskCard key={task.id} id={task.id} task={task.task} description={task.description} status={task.status} />)}
        </div>
      </div>
    </main>
  );
}
