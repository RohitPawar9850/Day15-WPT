//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
     <div className='bg-dark'><h1 className='bg-warning'>Stateful List</h1>
      <ListDemo></ListDemo></div>
    
    </>
   
  );
}

function ListDemo()
{
  let [list,setList] =useState(["delhi"]);
  let addItemAction= () => {
    let newList = [...list,"mumbai",];
    console.log(newList);

    setList(newList);
  };
  
  return (
    <>
    <input type="button" value="Add New Item" onClick={addItemAction}/>
    {list.map((item) => (
      <h1 className='bg-danger'>Hello {item}</h1>
    ))}
    </>
  );
}



export default App;
