import './App.css';
import User from './User';

const App=()=> {
  return (
   <>
   <div className="App">
    {/* <h1>App Component</h1> */}
    <User data={{name:"Shaym Sundar Singh", age:22,}}/>
   </div>
   </>
   
  );
  }

export default App;
