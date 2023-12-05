import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';

function App() {
  return (
    <div className="App">
      {/* <Message /> */}
      {/* <Greet/>
      <Welcome/> */}
      {/* <Hello/> */}
      {/* <Greet name="KGF" hero="yash">
        <p>action props</p>
      </Greet>
      <Greet name="Kantara" hero="rishab"/>
      <Greet name="Animal" hero="ranbir"/>
      <Welcome name="Animal" hero="ranbir kapoor"/> */}
      {/* <Counter/> */}
      {/* <PostForm/> */}
      <HookCounter/>
      <br/>
      <br/>
      <HookCounter2/>
      
    </div>
  );
}

export default App;
