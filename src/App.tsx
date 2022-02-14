import './css/App.css';
import './css/default.css';

import React, { useEffect, useState } from 'react';
import { TaskHeader } from './components/TaskHeader';
import { InputFeild } from './components/InputFeild';
import { Todo } from './components/model';



const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<Todo[]>([])
  //const [addToDo, setAddToDo] = useState("");
  var arr2 = [9, 1, 8, 2, 7, 3, 6, 5, 4];

  // for (let i = 0; i < arr2.length - 1; i++) {
  //   console.log(i)
  //   for (let j = 0; i < 10; j++) {


  //   }

  // }

  const handleAddToDo = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
    }
    setTodo("");

  }

  console.log(todos);
  return (
    <div className="App-header">
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}


      <div className="margintop3  marginleft">
        <TaskHeader />

        {/* <br /> */}
        <hr className="hrblue"></hr>
      </div>

      <div className=" margintop3 flex justify">
        <div className="width80 ">
          <InputFeild
            todo={todo}
            setTodo={setTodo}
            handleAddToDo={handleAddToDo}
          />
        </div>

      </div>

    </div>
  );
}

export default App;
