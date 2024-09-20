// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [todo, setTodo] = useState(null);

//   useEffect(() => {
//     fetch("https://dummyjson.com/todos/1")
//       .then(async function (res) {
//         const data = await res.json();
//         setTodo(data);
//       });
//   }, []);

//   return (
//     <>
//       {todo && <Todo todo={todo} />}
//     </>
//   );
// };

// function Todo({ todo }) {
//   return (
//     <div>
//       {todo.id}: {todo.todo}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [todo, setTodo] = useState(null);
//   const [id, setId] = useState(1); // Default ID to fetch initially

  // useEffect(() => {
  //   fetchTodoById(id);
  // }, [id]);

//   const fetchTodoById = (id) => {
//     fetch(`https://dummyjson.com/todos/${id}`)
//       .then(async (res) => {
//         const data = await res.json();
//         setTodo(data);
//       });
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>

//       {/* Buttons to fetch todos by ID */}
//       <div>
// <button onClick={() => setId(1)}>Fetch Todo 1</button>
// <button onClick={() => setId(2)}>Fetch Todo 2</button>
// <button onClick={() => setId(3)}>Fetch Todo 3</button>
//         {/* Add more buttons as needed */}
//       </div>

//       {/* Display the todo */}
//       {todo ? <Todo todo={todo} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// function Todo({ todo }) {
//   return (
//     <div>
//       <h3>Todo {todo.id}</h3>
//       <p>{todo.todo}</p>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState(null);
  const [id, setId] = useState(1);

  useEffect(()=>{
    fetchTodoById(id);
  },[id])
  const fetchTodoById = (id) => {
    fetch(`https://dummyjson.com/todos/${id}`).then(async (res) => {
      const data = await res.json();
      setTodo(data);
    });
  };
  return (
    <div>
      <button onClick={() => setId(1)}>Fetch Todo 1</button>
      <button onClick={() => setId(2)}>Fetch Todo 2</button>
      <button onClick={() => setId(3)}>Fetch Todo 3</button>
      <button onClick={()=> setId(4)}>Fetch Todo 4</button>
      <Todo todo={todo} />
    </div>
  );
};
function Todo({ todo }) {
  if (!todo) {
    return <p>Loading...</p>; // Show loading message until todo is fetched
  }
  return (
    <div>
      <h1>Todo {todo.id}</h1>
      <p>{todo.todo}</p>
    </div>
  );
}

export default App;
