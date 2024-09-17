import React from 'react';

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <button></button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
