import { Status } from "@prisma/client"
import Link from "next/link";

type TaskCardProps = {
  id: number,
  task: string,
  description: string,
  status: Status,
};

export default function TaskCard({ id, task, description, status }: TaskCardProps) {
  return (
    <Link href={`/tasks/${id}`}>
      <div className="w-52 h-32 p-2 border border-black flex flex-col hover:cursor-pointer">
        <h1 className="text-xl font-bold">{task}</h1>
        <p className="text-ellipsis flex-grow">{description}</p>
        <p>{status}</p>
      </div>
    </Link>
  );
}
