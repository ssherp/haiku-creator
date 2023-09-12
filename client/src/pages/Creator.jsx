import Nav from "../components/Nav";
import Assemble from "../components/Assemble";
import Words from "../components/Words";
import unsplash from "../utils/unsplash";

const Creator = () => {
    unsplash()
   return ( 
    <div className="container">
        <Nav />
        <Assemble />
        <Words /> 
    </div>
   )
}
export default Creator;