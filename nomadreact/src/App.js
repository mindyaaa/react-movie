// import Button from './Button';
import {useState} from 'react';

const TodoList = ({todoList, handleRemove}) =>{
  return (
  <ol>
    {todoList.map((item, index) => <li key={index}>
      <span>{item}</span>
      <button onClick={(e) => console.log(e) } >완료</button>
      <button onClick={() => handleRemove(index)} >삭제</button>
    </li>)}
  </ol>
  )
}


function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = (event) =>{
    setInputValue('');
    event.preventDefault();
    setTodoList((current) =>{
      const newTodoList = [...current];
      newTodoList.push(inputValue);
      return newTodoList;
    });
  }

  const handleRemove = (index) =>{
    setTodoList((current) =>{
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    })
  } 


  return (
    <div className="App">

      <form onSubmit={addItem}>
        <input value={inputValue} onChange={
          (event) => {
            setInputValue(event.target.value);
          }
        } type="text" />
        <button type='submit'>ADD</button>
      </form>

      <TodoList todoList={todoList} handleRemove={handleRemove} />

    </div>
  );
}

export default App;
