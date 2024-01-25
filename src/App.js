import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import Listtodo from './components/Listtodo';
import { useState } from 'react';

function App() {
  const [uploTodostatus,setuploadtodostatus]=useState({})
  return (
   <div className='d-flex-justify-content-center align-items-center'>
      <Addtodo setuploadTodostatus={setuploadtodostatus}/>
      <Listtodo uploTodostatus={uploTodostatus}/>
   </div>
  );
}

export default App;
