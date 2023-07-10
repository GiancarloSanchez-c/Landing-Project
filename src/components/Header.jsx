import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
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
