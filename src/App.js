import './App.css';
import React from 'react';
import ParentComponent from './hook_components/callback/ParentComponent';
import Counter from './hook_components/memo/Counter';
import FocusInput from './hook_components/ref/FocusInput';
import DocTitleOne from './hook_components/custom_hook/DocTitleOne';
import DocTitleTwo from './hook_components/custom_hook/DocTitleOne';
import CounterOne from './hook_components/custom_hook/CounterOne';
import CounterTwo from './hook_components/custom_hook/CounterTwo';


function App() {
  
  return (
    <div className="App">
      <CounterOne></CounterOne>
      <CounterTwo/>
    </div>
  );
}

export default App;
