import './App.css';
import logo from "./logo.jpg";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/home"; 
    navigate(path);
  };

  const features = [
    {
      title: 'AI-Powered Content Generation',
      description: 'Generate high-quality content for blogs, social media, and more.',
    },
    {
      title: 'Personalized Content Suggestions',
      description: 'Save time with customized content recommendations based on your needs.',
    },
    {
      title: 'Unlock Your Creativity',
      description: 'Unleash your creative potential and captivate your audience.',
    },
    {
      title: 'Twitter Thread Generation',
      description: 'Generate engaging Twitter threads with ease.',
    },
    {
      title: 'Blog Idea Generation',
      description: 'Get inspiration for your blog posts with creative ideas.',
    },
    {
      title: 'Tailored Content for Social Media',
      description: 'Craft captivating Instagram, LinkedIn, and Twitter posts.',
    },
  ];

  return (
    <div className="App">
      <div className="logoName">
        <img src={logo} alt="Synthetic.ai Logo" className="synLogo" />
        <span className="aiName">Synthetic.ai</span>
      </div>
      <h1 className="titleText"> Hi, Welcome to Synthetic.ai</h1>
      <div className='description-animation'>
        <h2>
          <span>#SyntheticAI </span>
          <span>is </span>
          <span>an </span>
          <span>AI </span>
          <span>tool </span>
          <span>that </span>
          <span>will </span>
          <span>help </span>
          <span>you </span>
          <span>generate </span>
          <span>content </span>
          <span>based </span>
          <span>on </span>
          <span>the </span>
          <span>link </span>
          <span>you </span>
          <span>provide. </span>
          <span>Try </span>
          <span>it </span>
          <span>Now! </span>
        </h2>
      </div>

      {/* <div className='description'>
        <p>#Synthetic AI is an AI that will help you generate content based on the link provided</p>
        <p>If you want to try, click on the link below!</p>
      </div> */}
      <div className='list-items'>
        <ul className='sample-list'>
          <li>AI-powered content generation for blogs, social media, and more.</li>
          <li>Save time and boost productivity with personalized content suggestions.</li>
          <li>Unlock your creativity and captivate your audience with synthetic.ai.</li>
          <li>Tailored content recommendations for blogs, Instagram, LinkedIn, and Twitter.</li>
        </ul>
      </div>

      <div className="card-container">
        <div className="card-row">
          {features.slice(0, 3).map((feature, index) => (
            <div className="card" key={index}>
              <h2 className="card-title">{feature.title}</h2>
              <p className="card-description">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="card-row">
          {features.slice(3, 6).map((feature, index) => (
            <div className="card" key={index}>
              <h2 className="card-title">{feature.title}</h2>
              <p className="card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button className='custom-btn btn-3' onClick={routeChange}>
      <span>Try Now!</span>
      </button>
      
    </div>
    
  );
}


export default App;
