import './App.css';
import Carda from './components/Carda';
function App() {
  const moviename = ["Men in Black","MIB"]
  return (
    <div className="App">
    {moviename.map((ele,idx)=>{
      return(
        <Carda movie={ele}/>
      )
    })}
     
     
    </div>
  );
}

export default App;
