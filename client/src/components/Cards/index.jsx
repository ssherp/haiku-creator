import React from 'react';

// FOR TESTING PURPOSES PLEASE FORGIVE ME MY SIGNUP AND LOGIN DONT WORK YET GUYS 
const mockUser = {
  username: "testuser",
  email: "testuser@example.com",
  haikus: [
    {
      _id: "1",
      content: "Whispers of the wind...",
    },
    {
      _id: "3",
      content: "Autumn leaves take flight...",
    },
    {
      _id: "4",
      content: "Morning mist descends...",
    },
    {
      _id: "5",
      content: "Moonlight paints the sea...",
    },
    {
      _id: "6",
      content: "Sun-lit petals sway...",
    },
  ],
};

  const user = mockUser;
 
function HaikuSection() {
  return (
      <ul className="pure-u-2-3 cardDeck">
        {user.haikus.map((haiku) => (
                <li className="card" key={haiku._id}>{haiku.content}</li>
              ))}
      </ul>

  );
}

export default HaikuSection;
