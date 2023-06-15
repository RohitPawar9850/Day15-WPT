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
  for(let i=0;i<10;i++)
  {
    list.push(data);
  }
  console.log(list);
  console.log("List Length :"+list.length);
  return (
    <>
    {list.forEach((item) => item)}
    {list.map((item) => item)}
    <br />
    </>
  );
}
// simplest for loop


export default App;
