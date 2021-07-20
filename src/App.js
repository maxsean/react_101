import './App.css';
import ToDoContainer from './components/todos/ToDoContainer';
import ReduxToDoContainer from './components/reduxTodos/ToDoContainer';

function App() {
  return (
    <div className="App">
      <ToDoContainer />
      <ReduxToDoContainer />
    </div>
  );
}

export default App;
