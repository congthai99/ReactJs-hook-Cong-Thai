import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Nav from './views/nav'
import Todo from './views/Todo';
import Covid from './views/Covid';

const App = () => {

  let [name, setName] = useState('Thai');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching TV', type: 'Eric' },
    { id: 'todo2', title: 'Doing homework', type: 'Eric' },
    { id: 'todo3', title: 'Playing game', type: 'Hoi Dan It' },
    { id: 'todo4', title: 'Reading book', type: 'Hoi Dan It' }
  ]);

  // useEffect(() => {
  //   console.log('run use effects address')
  // }, [address]);
  // useEffect(() => {
  //   console.log('run use effects todos')
  // }, [todos]);

  const handleEvenClick = (event) => {
    if (!address) {
      alert('empty input')
      return;
    }
    let newtodo = {
      id: Math.floor(Math.random() * 100),
      title: address, type: 'Eric'
    }
    setTodos([...todos, newtodo])
    setAddress('')
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let currentTodo = todos
    currentTodo = currentTodo.filter(item => item.id !== id)
    setTodos(currentTodo)
  }

  //re-render
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>ReacJs basic with {name}</h1>
        <Covid />
        {/* <Todo
          todos={todos}
          title={'All todo'}
          deleteDataTodo={deleteDataTodo}
        />

        <Todo
          todos={todos.filter(item => item.type === 'Eric')}
          title={`Eric's todos`}
          deleteDataTodo={deleteDataTodo}
        />

        <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)} />
        <button type="button" onClick={(event) => handleEvenClick(event)}>click me</button> */}
      </header>
    </div>
  );
}

export default App;
