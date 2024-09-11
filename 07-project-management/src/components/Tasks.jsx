import NewTasks from "./NewTasks";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-800 mb-4">할 일</h2>
      <NewTasks onAdd={onAdd} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          이 프로젝트에는 아직 할 일 목록이 없습니다.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
