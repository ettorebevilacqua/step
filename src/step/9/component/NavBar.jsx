
import { Link } from "react-router-dom";


const NavBar = ({ col }) => {

    return (
        <div className={`menuFlex ${col ? "flex-col" : "flex-row"}`}>
            <div>
            <Link to="/">Home</Link>
            </div>
            <div>
            <Link to="/EffectA">Effect</Link>
            </div>
            <div>
            <Link to="/EffectB">Effect 2</Link>
            </div>
        </div>
    );
};

export default NavBar;