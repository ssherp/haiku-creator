import React from 'react';

function WordDeck() {
  return (
    <aside className="pure-g">
      <div className="pure-u-2-3 wordDeck">
        <div>
          <h3>1 syllable</h3>
          <p className="words">Leaf<br />
            Stream<br />
            Sun<br />
            Tree<br />
            Sky</p>
        </div>
        <div>
          <h3>2 syllables</h3>
          <p className="words">Meadow<br />
            Whisper<br />
            Pebble<br />
            Rainbow<br />
            Blossom</p>
        </div>
        <div>
          <h3>3 syllables</h3>
          <p className="words">Butterfly<br />
            Waterfall<br />
            Firefly<br />
            Horizon<br />
            Tranquil</p>
        </div>
        <div>
          <h3>Verbs</h3>
          <p className="words">Whispers<br />
            Dances<br />
            Glistens<br />
            Sways<br />
            Blooms</p>
        </div>
        <div>
          <h3>Adjectives</h3>
          <p className="words">Gentle<br />
            Tranquil<br />
            Radiant<br />
            Fragrant<br />
            Serene</p>
        </div>
        <div>
          <h3>Prepositions</h3>
          <p className="words">of<br />
            in<br />
            for<br />
            over<br />
            on</p>
        </div>
      </div>
      <div className="pure-u-1-3 inspire"></div>
    </aside>
  );
}

export default WordDeck;
