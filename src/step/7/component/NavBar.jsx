
import { Link } from "react-router-dom";

const NavBar = ({  col }) => {

    return (
        <div className={`menuFlex ${col ? "flex-col" : "flex-row"}`}>
            <Link to="/">Home</Link>
            <Link to="/Prodotti">Prodotti</Link>
            <Link to="/contact">Contatti</Link>
        </div>
    );
};

export default NavBar;