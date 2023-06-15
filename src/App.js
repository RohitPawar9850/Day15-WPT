//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <ListDemo></ListDemo>
    </>
  );
}

function ListDemo()
{
  let list =[];
  let data="_Hello World_";
  for(let i=0;i<20;i++)
  {
    list.push("");
  }
  
  return (
    <>
    <h1>{data}</h1>
    {list.map((item) => (
      <div>
        <h1>Hello World</h1>
      </div>
  ))}
    </>
  );
}



export default App;
