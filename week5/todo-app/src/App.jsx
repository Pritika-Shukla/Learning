import React, { useState ,useEffect} from 'react'
import CreateTodo from './components/CreateTOdo'
import Todos from './components/Todos'

const App = () => {

  const [todos,setTodos]=useState([]);

  useEffect(() => {
 
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        const data = await res.json();
        setTodos(data.todos);
      })
      .catch((error) => console.error('Error fetching todos:', error));
  }, []); 

  return (
    <div>
<CreateTodo/>
<Todos todos={todos}/>
    </div>
  )
}

export default App
