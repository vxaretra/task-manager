import { Status } from "@prisma/client"
import Link from "next/link";

type TaskCardProps = {
  id: number,
  task: string,
  description: string,
  status: Status,
};

const taskStatusColor = {
  [Status.TODO]: "text-red-500",
  [Status.INPROGRESS]: "text-orange-500",
  [Status.DONE]: "text-green-500",
};

export default function TaskCard({ id, task, description, status }: TaskCardProps) {
  return (
    <Link href={`/tasks/${id}`}>
      <div className="p-2 border border-black flex flex-col hover:cursor-pointer">
        <h1 className="text-xl font-bold">{task}</h1>
        <p className="text-ellipsis overflow-clip">{description}</p>
        <p className={`${taskStatusColor[status]} font-semibold`}>{status}</p>
      </div>
    </Link>
  );
}
