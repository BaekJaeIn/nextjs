import { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enteredTask, setEneterdTask] = useState("");

  const handleChange = (event) => {
    setEneterdTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }

    onAdd(enteredTask);
    setEneterdTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        할 일 추가
      </button>
    </div>
  );
}
