import './App.css';
import React from 'react';
import ComponentC from './hook_components/ComponentC';
import DataFetchingTwo from './hook_components/DataFetchingTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <DataFetchingTwo></DataFetchingTwo>
    </div>
  );
}

export default App;
