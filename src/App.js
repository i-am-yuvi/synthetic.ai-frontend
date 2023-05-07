import './App.css';
import logo from "./logo.jpg";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `./Home`; 
    navigate(path);
  }

  return (
    <div className="App">
      <div className="logoName">
        <img src={logo} alt="Synthetic.ai Logo" className="synLogo" />
        <span className="aiName">Synthetic.ai</span>
      </div>
      <h1 className="titleText"> Hi, Welcome to Synthetic.ai</h1>
      <div>
        <p>Synthetic AI is an AI that will help you generate content based on the link provided</p>
        <p>If you want to try, click on the link below!</p>
      </div>
      <button className="continueBtn" onClick={routeChange}>Continue</button>

    </div>
    
  );
}

export default App;
