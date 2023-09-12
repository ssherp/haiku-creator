import Nav from "../components/Nav";

const Homepage = () => {
  
    return (
    <div className="container">
            <Nav />
        <main className="pure-g">
            <div className="pure-u-2-3">
                <p className="haiku" id="first_line">Whispers of the wind</p>   
                <p className="haiku" id="second_line">Leaves dancing in golden light,</p>
                <p className="haiku" id="third_line">Nature's song begins</p> 
            </div>
            <div className="pure-u-1-3">
                <p><b>Haiku Helper:</b> Your Gateway to Poetic Bliss! Unleash your inner poet with ease using our intuitive platform. Craft beautiful haikus effortlessly, guided by our user-friendly drag-n-drop interface. Dive into a world of syllabic harmony and nature-inspired verse. Let your creativity flourish with <b>Haiku Helper</b>! Start composing today.</p>
            </div>
        </main>
        <aside className="unsplash"></aside>
    </div>
    );
};

export default Homepage;