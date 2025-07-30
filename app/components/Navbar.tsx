import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">CVScanPro</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Attach Resume
            </Link>
        </nav>
    )
}
export default Navbar
