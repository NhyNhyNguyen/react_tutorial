import './App.css';
import React, { useReducer } from 'react';
import ComponentB from './hook_components/reduce_context/ComponentB';
import ComponentA from './hook_components/reduce_context/ComponentA';
import ComponentC from './hook_components/reduce_context/ComponentC';

export const CountContext = React.createContext()
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <CountContext.Provider value={{ count: count, dispatch: dispatch }}>
        <div>Count - {count}</div>
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
      </CountContext.Provider>

    </div>
  );
}

export default App;
