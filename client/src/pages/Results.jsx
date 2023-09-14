// import Nav from components
import Nav from "../components/Nav";
import { useState, useEffect } from 'react';
import unsplash from '../utils/unsplash';
import { Link } from 'react-router-dom';




// create the Results page
const Results = () => {

  const [savedHaikus, setSavedHaikus] = useState([]);

  useEffect(() => {
    const savedHaikusFromLocalStorage = JSON.parse(localStorage.getItem('savedHaikus')) || [];
    setSavedHaikus(savedHaikusFromLocalStorage);
  }, []);

    const [unsplashDataLoaded] = useState(false);
    useEffect(() => {
  
      unsplash()
        .then(() => {
          // Handle the successful loading of the image if needed
        })
        .catch((error) => {
          console.error('Error loading unsplash data:', error);
        });
    }, []);


    return (
    <div className="container">
            <Nav />
        <main className="pure-g">
            <div className="pure-u-2-3">
            {savedHaikus.map((haiku, index) => (
        // <Link to={`/creator/${index}`} key={index}>
        <Link to={`/creator`} key={index}>
          <p className="haiku">
        <div>{haiku.line1.join(' ')}</div>
        <div>{haiku.line2.join(' ')}</div>
        <div>{haiku.line3.join(' ')}</div>
          </p>
        </Link>
      ))}
            </div>
            <div className="pure-u-1-3">
                <p><b>Haiku Helper:</b> Your Gateway to Poetic Bliss! Unleash your inner poet with ease using our intuitive platform. Craft beautiful haikus effortlessly, guided by our user-friendly drag-n-drop interface. Dive into a world of syllabic harmony and nature-inspired verse. Let your creativity flourish with <b>Haiku Helper</b>! Start composing today.</p>
            </div>
        </main>
        <aside className="unsplash" id="haikuPicture"></aside>
        {/* possibly need to add in image id to above class to match result of previous created haiku */}
    </div>
    );
};

export default Results;