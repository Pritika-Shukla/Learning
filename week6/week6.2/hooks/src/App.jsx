import React, { useEffect, useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/todos/1")
      .then(async function (res) {
        const data = await res.json();
        setTodo(data);
      });
  }, []);

  return (
    <>
      {todo && <Todo todo={todo} />}
    </>
  );
};

function Todo({ todo }) {
  return (
    <div>
      {todo.id}: {todo.todo}
    </div>
  );
}

export default App;