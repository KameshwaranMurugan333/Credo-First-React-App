import './App.css';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent initialCount={100} />
      <ClassComponent initialCount={200} />
    </div>
  );
}

export default App;
