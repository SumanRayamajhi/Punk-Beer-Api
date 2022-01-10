import { Link } from "react-router-dom";
const NavBar = ({ onClick }) => {
  return (
    <nav className="navbar bg-success p-2 text-white bg-opacity-75">
      <h1 className="bg-prim ms-3">Beens Love Beers</h1>
      <Link
        to="/"
        className="btn btn-outline-success my-2 my-sm-0 text-white"
        type="submit"
      >
        Home
      </Link>
      <Link
        to="/favourites"
        className="btn btn-outline-success my-2 my-sm-0 text-white mx-4"
        type="submit"
        onClick={onClick}
      >
        Favourites
      </Link>
    </nav>
  );
};

export default NavBar;
