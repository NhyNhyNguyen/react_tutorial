import './App.css';
import React from 'react';
import ComponentC from './hook_components/ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value='vishwas'>
        <ChannelContext.Provider value='code volutuion'>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
