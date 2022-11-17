import './App.css';
import Nav from "./nav";

function App() {
  let user=[
    {name:'anil',id:1},
    {name:'peter',id:2},
    {name:'bruce',id:3},
    {name:'tony',id:4},
  ]

  return (
    <div className="App">
      <h1>Ujjwal</h1>
      <Nav />

    </div>
  );
}

export default App;
