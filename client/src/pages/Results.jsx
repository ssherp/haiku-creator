import React, { useState, useEffect } from 'react';
import unsplash from '../utils/unsplash';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Results = () => {
  const [savedHaikus, setSavedHaikus] = useState([]);

useEffect(() => {
  const savedHaikusFromLocalStorage = JSON.parse(localStorage.getItem('savedHaikus')) || [];
  console.log('Saved Haikus from localStorage:', savedHaikusFromLocalStorage);
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
          {savedHaikus.length > 0 ? (
            <Link to={`/creator`} key={savedHaikus.length - 1}>
              <p className="haiku">
                <div>{savedHaikus[savedHaikus.length - 1].line1.join(' ')}</div>
                <div>{savedHaikus[savedHaikus.length - 1].line2.join(' ')}</div>
                <div>{savedHaikus[savedHaikus.length - 1].line3.join(' ')}</div>
              </p>
            </Link>
          ) : (
            <p>No saved haikus available.</p>
          )}
        </div>
        <div className="pure-u-1-3">
          <p>
            <b>Haiku Helper:</b> Your Gateway to Poetic Bliss! Unleash your inner poet with ease using our intuitive platform. Craft beautiful haikus effortlessly, guided by our user-friendly drag-n-drop interface. Dive into a world of syllabic harmony and nature-inspired verse. Let your creativity flourish with <b>Haiku Helper</b>! Start composing today.
          </p>
        </div>
      </main>
      <aside className="unsplash" id="haikuPicture"></aside>
    </div>
  );
}

export default Results;
