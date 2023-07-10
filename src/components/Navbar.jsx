import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Wrapper">
        <div className="Navbar-top">
          <ul>
            <li>
              <Link to="/" title="Inicio">
                Inicio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

