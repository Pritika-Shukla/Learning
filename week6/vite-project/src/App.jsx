// import React, { useState } from "react";

// const App = () => {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="gesdte" />
//     </div>
//   );
// };
// function HeaderWithButton() {
//   const [title, setTitle] = useState("");

//   function updateTitle() {
//     setTitle("MY name  is " + Math.random());
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>Update Title</button>
//       <Header title={title} />
//     </div>
//   );
// }
// function Header({ title }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
    }
  ]);

  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo(prev => ({ ...prev, [name]: value }));
  };

  const addTodo = () => {
    if (newTodo.title && newTodo.description) {
      setTodos(prev => [...prev, { ...newTodo, id: Date.now() }]);
      setNewTodo({ title: "", description: "" });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          name="title"
          value={newTodo.title}
          onChange={handleInputChange}
          placeholder="Todo title"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="description"
          value={newTodo.description}
          onChange={handleInputChange}
          placeholder="Todo description"
          className="border p-2 mr-2"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded">
          Add Todo
        </button>
      </div>
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} title={todo.title} description={todo.description} />
        ))}
      </div>
    </div>
  );
};

const Todo = ({ title, description }) => {
  return (
    <div className="border p-4 mb-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default App;
