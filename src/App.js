import "./App.css";
import AddTask from "./component/AddTask/AddTask";
import ListTasks from "./component/ListTasks/ListTasks";
import Counter from "./component/Counter/Counter";

function App() {
  return (
    <div className="App">
      <h2>To Do Application</h2>
      <AddTask />
      <ListTasks />
      <Counter />
    </div>
  );
}

export default App;
