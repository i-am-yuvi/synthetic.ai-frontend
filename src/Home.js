import TextField from '@mui/material/TextField';
import "./Home.css"
import logo from "./logo.jpg";


function Home() {
    return(
        <div className="home">
            {/*logo & name on top left corner*/}
            <div className="logoName">
                <img src={logo} alt="Synthetic.ai Logo" className="synLogo" />
                <span className="aiName">Synthetic.ai</span>
            </div>

            <TextField className="textbox-link" label="Enter link" variant="outlined"/>

            <div className="btn">
                <button className="submitBtn">Submit</button>
            </div>
        </div>
    );
}

export default Home;