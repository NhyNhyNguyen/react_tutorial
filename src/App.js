import './App.css';
import React from 'react';
import ComponentC from './hook_components/ComponentC';
import CounterOne from './hook_components/CounterOne';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterOne></CounterOne>
    </div>
  );
}

export default App;
