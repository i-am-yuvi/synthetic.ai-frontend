import './App.css';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <h1> Hi, Welcome to Synthetic.ai</h1>
      
      <TextField className="textbox-link" label="Enter link" variant="outlined" />
      
      <div className="btn">
        <button className="submitBtn">Submit</button>
      </div>
    </div>
  );
}

export default App;
