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
    let inputRef = document.querySelector("#id1");
    let inputvalue = inputRef.value;
    let newList = [...list,inputvalue];
    console.log(newList);

    setList(newList);
    inputRef.value="";
  };
  
  return (
    <>
    <input type="text" id="id1" placeholder='enter text' />
    <br />
    <input type="button" value="Add New Item" onClick={addItemAction}/>
    {list.map((item) => (
      <h1 className='bg-danger'>{item}</h1>
    ))}
    </>
  );
}



export default App;
