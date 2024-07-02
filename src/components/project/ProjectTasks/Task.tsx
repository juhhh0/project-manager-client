import { useState } from "react";
import { TaskType } from "../../../types/types";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type Props = { task: TaskType };

const Task: React.FC<Props> = ({ task }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <li key={task.id} className="w-full bg-white/5 px-4 py-2 rounded-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        {task.title}
        <ChevronDownIcon
          className={`w-5 h-5 ml-auto ${open ? "transform rotate-180" : ""}`}
        />
      </div>
      {open && (
        <div className="text-gray-400 pt-2 relative">
          {task.content}
          <button className="absolute bottom-0 right-0 text-red-500">
            delete
          </button>
        </div>
      )}
    </li>
  );
};

export default Task;
