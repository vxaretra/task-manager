import { createNewTask } from "@/actions/tasks/actions";
import Link from "next/link";

export default function TaskNewPage() {
  return (
    <div className="w-1/3 mx-auto min-h-screen flex flex-col justify-center align-middle gap-5">
      <Link className="w-fit px-2 border border-black" href={"/tasks"}>Back</Link>
      <form className="border border-black flex flex-col p-4 gap-2" action={createNewTask}>
        <label htmlFor="task">Task:</label>
        <input className="border border-black" type="text" name="task" id="task" required />
        <label htmlFor="description">Description:</label>
        <input className="border border-black" type="text" name="description" id="description" required />
        <p>Status:</p>
        <div>
          <input className="mr-1" type="radio" name="status" id="todo" value="TODO" required />
          <label className="mr-2" htmlFor="todo">TODO</label>
          <input className="mr-1" type="radio" name="status" id="inprogress" value="INPROGRESS" />
          <label className="mr-2" htmlFor="inprogress">IN PROGRESS</label>
          <input className="mr-1" type="radio" name="status" id="done" value="DONE" />
          <label className="mr-2" htmlFor="done">DONE</label>
        </div>
        <button className="w-fit p-1 border border-black" type="submit">Add</button>
      </form>
    </div>
  )
}