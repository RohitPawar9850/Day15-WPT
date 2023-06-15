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
  let list =["delhi","mumbai","pune"];
  let data="_Hello World_";
  
  return (
    <>
    <h1>{data}</h1>
    {/**version 1 */}
    {list.map((item) => " Hello "+item +",")}
    
    {/**version 2 */}
    {list.map((item) => item+"*")}

    {/**version 3 */}
    {list.map((item) => (
      <>
      <h1>Hello World and Hello {item}</h1>
      </>
    ))}
    </>
  );
}
// simplest for loop


export default App;
