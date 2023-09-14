import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// // FOR TESTING PURPOSES PLEASE FORGIVE ME MY SIGNUP AND LOGIN DONT WORK YET GUYS 
// const mockUser = {
//   username: "testuser",
//   email: "testuser@example.com",
//   haikus: [
//     {
//       _id: "1",
//       content: "Whispers of the wind...",
//     },
//     {
//       _id: "3",
//       content: "Autumn leaves take flight...",
//     },
//     {
//       _id: "4",
//       content: "Morning mist descends...",
//     },
//     {
//       _id: "5",
//       content: "Moonlight paints the sea...",
//     },
//     {
//       _id: "6",
//       content: "Sun-lit petals sway...",
//     },
//   ],
// };

//   const user = mockUser;

function HaikuSection( ) {
  const [savedHaikus, setSavedHaikus] = useState([]);

  useEffect(() => {
    const savedHaikusFromLocalStorage = JSON.parse(localStorage.getItem('savedHaikus')) || [];
    setSavedHaikus(savedHaikusFromLocalStorage);
  }, []);

  return (
    <ul className="pure-u-2-3 cardDeck">
      {savedHaikus.map((haiku, index) => (
        // <Link to={`/creator/${index}`} key={index}>
        <Link to={`/results`} key={index}>
          <li className="card">
        <div>{haiku.line1.join(' ')}</div>
        {/* <div>{haiku.line2.join(' ')}</div>
        <div>{haiku.line3.join(' ')}</div> */}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default HaikuSection;