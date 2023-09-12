// import Nav from components
import Nav from "../components/Nav";

// create the Results page
const Results = () => {
    return (
    <div className="container">
            <Nav />
        <main className="pure-g">
            <div className="pure-u-2-3">
                <p className="haiku" id="first_line">UPDATE WITH LINE ONE HAIKU</p>
                <p className="haiku" id="first_line">UPDATE WITH LINE TWO HAIKU</p>
                <p className="haiku" id="first_line">UPDATE WITH LINE THREE HAIKU</p>
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