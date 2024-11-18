import { Link } from 'react-router-dom';
import './App.css';
import { Client } from './contentful/Client';

function App() {
 
  console.log(Client);
 
  return (
    <>
      <div className="main">
        <div className="content">
        <div className="left-section">
          <img 
            src="https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_2560%2Cc_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg" 
            alt="Left Side" 
            className="left-image" 
          />
          </div>
          <div className='right-section'>
          <div className="text-section">
            <h1>TasteMate</h1>
            <p>This is some descriptive text about the app.</p>
            <button className="action-watch">Watch</button>
            <Link to={"/blog"}>
            <button className="action-read">Read</button>
            </Link>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
