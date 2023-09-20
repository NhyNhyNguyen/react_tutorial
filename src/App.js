import './App.css';
import ComponentA from './components/ComponentA';
import PostList from './components/PostList';
import { UserProvider } from './components/UserContext';
import HookCounterFour from './hook_components/HookCounterFour';
import HookCounterOne from './hook_components/HookCounterOne';
import HookMouse from './hook_components/HookMouse';
function App() {
  return (
    <div className="App">  
      <PostList/>
    </div>
  );
}

export default App;
