import { useState } from "react";
import { FaSearch, FaBars, FaUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="Header">
      <div className="Wrapper">
        <div className="Header-logo">
          <h1>
            <Link to="/" title="Casa Blanca">
              <img
                src="/assets/img/logos/2-preview.png"
                alt="Logo"
                loading="lazy"
              />
            </Link>
          </h1>
        </div>
        <button
          onClick={toggleMenu}
          className={`Header-mobile ${menu ? "" : "isActive"}`}
        >
          {menu ? (
            <AiOutlineClose size={25} color="black" />
          ) : (
            <FaBars size={25} />
          )}
        </button>

        {menu && (
          <nav className={`navbar-mobile ${menu ? "isActive" : ""}`}>
            <ul>
              <li>
                <Link to="/account/login" title="Login">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/account/login" title="Login">
                  Registrate
                </Link>
              </li>
              <li>
                <Link to="/account/login" title="Login">
                  Puntos de Venta
                </Link>
              </li>
              <li>
                <Link to="/account/login" title="Login">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <div className="Header-form">
          <FormSearch />
        </div>
        <div className="Header-auth">
          <div className="Header-auth_login">
            <Link to="/account/signin" title="Ingresa">
              <FaUser size={25} />
              Ingresa
            </Link>
          </div>
          <div className="Header-auth_register">
            <Link to="/account/register" title="Registrate">
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormSearch = () => {
  return (
    <form className="form">
      <input
        type="text"
        name="search"
        placeholder="Busca por artista o por evento"
      />
      <button className="Header-button">
        <FaSearch size={20} />
      </button>
    </form>
  );
};
