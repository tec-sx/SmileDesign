const { Link } = require("react-router-dom")

const Navbar = ({ navigationData, currentRoute, setCurrentRoute}) => {
    return(
        <nav className="flex flex-row items-center justify-between">Navbar
            <div>
                <Link to="/home">Home</Link>
                |{" "}
                <Link to="/aboutus">About Us</Link>
            </div>
            <button>---</button>
        </nav>
    );
}

export default Navbar;