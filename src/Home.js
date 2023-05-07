import logo from "./logo.jpg"


function Home() {
    return(
        <div className="home">
            <TextField className="textbox-link" label="Enter link" variant="outlined"/>

            <div className="btn">
                <button className="submitBtn">Submit</button>
            </div>
        </div>
    );
}

export default Home;