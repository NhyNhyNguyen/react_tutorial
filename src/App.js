import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet>
      <Welcome></Welcome> */}
      {/* <Greet name = "nhi" heroName = "Super man">
        <>This is children props </>
      </Greet>
      <Greet name = "nhi 2" heroName = "Bat man"></Greet>
      <Hello></Hello>
      <Welcome  name = "nhi" heroName = "Super man"></Welcome>
      <Welcome name = "nhi 2" heroName = "Bat man"></Welcome> */}

      {/* <Message></Message>

      // <Counter></Counter> */}
     <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
