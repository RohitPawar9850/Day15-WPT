//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1 className='bg-info '>Props Demo</h1>
    <MessageDemo message="Hi" username="Rohit Pawar"></MessageDemo>
    <MessageDemo  message="Hi" username="Rohit Saste"></MessageDemo>
    <MessageDemo  message="Hello" username="Rohit Jadhav"></MessageDemo>
    </>
  );
}

/*
function MessageDemo(Props)
{
  console.log("I am inside MessageDemo",Props);
  return (
    <>
    <h1>Hello {Props.username}</h1>
    </>
  );
}

*/

function MessageDemo({message,username})
{
  return (
    <>
    <h1>Hello {message} {username} </h1>
    </>
  );
}

export default App;
