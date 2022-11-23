import {useState, useEffect} from 'react';

function App() {

  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
    // console.log(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setTodos(current => [toDo, ...current]);
    setTodo("");
    console.log(toDos);
  }


  return (
    <div className="App">
      <h1>To Do List ({toDos.length})</h1>
      <form type="submit" onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder='Write your todo' />
        <button type='submit'>Add</button>
      </form>
      <hr />
      {
        toDos.map((item, index) =>
          <li key={index}>{item}</li>
        )
      }
    </div>
  );
}

export default App;
