import TextField from '@mui/material/TextField';
import "./Home.css"
import logo from "./logo.jpg";
import Dropdown from "./Dropdown";
import { useState } from 'react';


function Home() {
    const [link, setLink] = useState('');
    const [option, setOption] = useState('');
    const [content, setContent] = useState('');

    const options = [
        {value:"tweet", label:"Tweet"},
        {value:"twitter-thread", label:"Twitter Thread"},
        {value:"instagram-caption", label:"Instagram Caption"},
        {value:"linkedIn-post", label:"LinkedIn Post"},
        {value:"blog-ideas", label:"Blog Ideas"},
        {value:"blog-outline", label:"Blog Outline"},
        {value:"blog-seo", label:"Blog Seo"},
        {value:"summary", label:"Summary"},
        {value:"rewrite-professional", label:"Rewrite in Professional Tone"},
        {value:"rewrite-empathetic", label:"Rewrite in Empathetic Tone"},
        {value:"rewrite-friendly", label:"Rewrite in Friendly Tone"},
        {value:"rewrite-casual", label:"Rewrite in Casual Tone"},
        {value:"expand-content", label:"Expand the Content"},
    ]

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };

    const handleOptionChange = (selectedOption) => {
        setOption(selectedOption.value);
    };

    const handleSubmit = () => {
        fetch('http://localhost:5000/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ link, option })
        })
        .then(response => response.json())
        .then(data => {
            setContent(data.content); // Set the content state to the received content
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };


    return(
        <div className="home">
            {/*logo & name on top left corner*/}
            <div className="logoName">
                <img src={logo} alt="Synthetic.ai Logo" className="synLogo" />
                <span className="aiName">Synthetic.ai</span>
            </div>

            <h2 className="titleName">Enter the link below </h2>

            <TextField className="textbox-link" label="Enter link" variant="outlined" value={link} onChange={handleLinkChange}/>

            <h2 className="dropdownTitle">Now Select the Content from the Dropdown!</h2>

            <div className="dropdown-items">
                <Dropdown placeHolder="Select..." options={options} onChange={handleOptionChange}/>
            </div>

            <div className="btn">
                <button className="submitBtn" onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <h2>Generated Content</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Home;