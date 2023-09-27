import './App.css';
import React from 'react';
import ParentComponent from './hook_components/callback/ParentComponent';
import Counter from './hook_components/memo/Counter';
import FocusInput from './hook_components/ref/FocusInput';
import ClassTimer from './hook_components/ref/ClassTimer';
import HookTimer from './hook_components/ref/HookTimer';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  
  return (
    <div className="App">
      <ClassTimer/>
      <HookTimer/>
    </div>
  );
}

export default App;
