"use client";

import { Task } from "@prisma/client";
import { useState } from "react";

type TaskEditFormProps = {
  task: Task,
  edit: (formData: FormData) => Promise<void>,
  remove: (formData: FormData) => Promise<void>,
};

export default function TaskEditForm({ task, edit, remove }: TaskEditFormProps) {
  const [status, setStatus] = useState(task.status);

  return (
    <form className="border border-black flex flex-col p-4 gap-2">
      <label htmlFor="task">Task:</label>
      <input className="border border-black" type="text" name="task" id="task" value={task.task} disabled />
      <label htmlFor="description">Description:</label>
      <input className="border border-black" type="text" name="description" id="description" value={task.description} disabled />
      <p>Status:</p>
      <div>
        <input className="mr-1" type="radio" name="status" id="todo" value="TODO" checked={status === "TODO"} required onClick={() => setStatus("TODO")} />
        <label className="mr-2" htmlFor="todo">TODO</label>
        <input className="mr-1" type="radio" name="status" id="inprogress" value="INPROGRESS" checked={status === "INPROGRESS"} onClick={() => setStatus("INPROGRESS")} />
        <label className="mr-2" htmlFor="inprogress">IN PROGRESS</label>
        <input className="mr-1" type="radio" name="status" id="done" value="DONE" checked={status === "DONE"} onClick={() => setStatus("DONE")} />
        <label className="mr-2" htmlFor="done">DONE</label>
      </div>
      <div>
        <button className="w-fit mr-3 p-1 border border-black" formAction={edit}>Edit</button>
        <button className="w-fit p-1 border border-black" formAction={remove}>Delete</button>
      </div>
    </form>
  );
}