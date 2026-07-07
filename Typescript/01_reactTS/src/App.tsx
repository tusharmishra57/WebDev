
// 1. Define the TypeScript interface for a single Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 2. Define the interface for the component's props
interface TodoListProps {
  todos: Todo[];
}

// 3. Create the component using the props interface
function App()
{
  function TodoList({ todos }: TodoListProps) {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2">My Tasks</h2>
      
      {todos.length === 0 ? (
        <p className="text-gray-500 italic">No tasks yet!</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li 
              key={todo.id} 
              className={`p-3 rounded-lg border text-sm transition-all ${
                todo.completed 
                  ? 'bg-gray-50 text-gray-400 line-through border-gray-200' 
                  : 'bg-slate-50 text-gray-700 border-slate-200 font-medium'
              }`}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
}
 
export default App