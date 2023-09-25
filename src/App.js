import './App.css';
import React from 'react';
import ParentComponent from './hook_components/callback/ParentComponent';
import Counter from './hook_components/memo/Counter';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
