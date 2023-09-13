import './App.css';
import ClassCounter from './hook_components/ClassCounter';
import HookCounter from './hook_components/HookCounter';
function App() {
  return (
    <div className="App">
      <ClassCounter> </ClassCounter>
      <HookCounter></HookCounter>
    </div>
  );
}

export default App;
