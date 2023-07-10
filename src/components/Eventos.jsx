import { Link } from "react-router-dom";
import { events, featured } from "./data";

export const Eventos = () => {
  return (
    <section className="Events">
      <div className="Wrapper">
        <div className="content">
          <div className="Events-list">
            {events?.map((event) => (
              <div className="Events-content" key={event.id}>
                <article className="Events-list_article">
                  <div className="Events-list_image">
                    <img src={event.src} loading="lazy" alt={event.nameEvent} />
                  </div>
                  <Link
                    to="/"
                    title={event.nameEvent}
                    className="Events-list_description"
                  >
                    <img
                      src={event.ticket}
                      loading="lazy"
                      alt="Logo Ticket"
                      style={{ width: "24px" }}
                    />
                    <div>
                      <strong className="Event-list_description-location">
                        Estadio Nacional - Lima /
                        <span className="red">Música</span>
                      </strong>
                      <h3 className="Event-list_description-title">The Cure</h3>
                      <span className="Event-list_description-date">
                        22 de noviembre 2023
                      </span>
                    </div>
                  </Link>
                </article>
              </div>
            ))}
          </div>

          <aside className="Events-featured">
            <h2>Destacados</h2>
            {featured?.map(({ imagePrincipal, title, id }) => (
              <div className="item--desktop" key={id}>
                <figure className="effect-lexi">
                  <img
                    src={imagePrincipal}
                    alt={title}
                    loading="lazy"
                  />
                  <figcaption className="figcaption">
                    <Link to="/" title={title}>
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios/50/ffffff/right--v1.png"
                        alt="right--v1"
                      />
                    </Link>
                  </figcaption>
                </figure>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};
