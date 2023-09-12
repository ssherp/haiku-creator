import React from 'react';

function HaikuSection() {
  return (
    <main className="pure-g">
      {/* Main section for haiku and introductory content */}
      <div className="pure-u-2-3">
        <p className="haiku" id="first_line">Whispers of the wind</p>
        <p className="haiku" id="second_line">Leaves dancing in golden light,</p>
        <p className="haiku" id="third_line">Nature's song begins</p>
      </div>
      <div className="pure-u-1-3">
        <a href="#"><span className="creator">SAVE HAIKU</span></a>
      </div>
    </main>
  );
}

export default HaikuSection;
