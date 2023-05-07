import './App.css';
import TextField from '@mui/material/TextField';
import logo from "./logo.jpg"

function App() {
  return (
    <div className="App">
      <div className="logoName">
        <img src={logo} alt="Synthetic.ai Logo" className="synLogo" />
        <span className="aiName">Synthetic.ai</span>
      </div>
      <h1 className="titleText"> Hi, Welcome to Synthetic.ai</h1>
    </div>
    
  );
}

export default App;
