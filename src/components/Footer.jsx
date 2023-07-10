import { Link } from "react-router-dom";
import { footerList, footerSocial } from "./data";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Wrapper">
        <div className="Footer-logo">
          <img
            src="/assets/img/logos/cb_blancoLogo.png"
            alt="Logo"
            loading="lazy"
          />
        </div>

        <div className="Footer-info">
          <h3>Conozcámonos</h3>
          <ul>
            {footerList?.map(({ id, title }) => (
              <li key={id}>
                <Link to="" title={title}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="Footer-social">
          <h3>Conversemos</h3>
          <ul>
            {footerSocial?.map(({ id, icon, title }) => (
              <li key={id}>
                <Link to="" title={title}>
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/" title="Centro de ayuda" className="Footer-social_ayuda">
            <span>
              Centro de ayuda
            </span>
          </Link>
        </div>

        <Link to='/' title="Libro de reclamaciones" className="Footer-reclamation">
          <img src="/assets/img/logos/img_libro_de_reclamaciones.png" />
        </Link>
      </div>
    </footer>
  );
};
