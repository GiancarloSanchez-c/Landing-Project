import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Carousel = ({ images, showButtons }) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const previous = () => {
    setSelectIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setSelectIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <img
        src={images[selectIndex].src}
        alt="Banner"
        className={loaded ? "loaded carousel-img" : ""}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
      <div className="carousel-buttons">
        {showButtons ? (
          <>
            <button className="button-left" onClick={previous}>
              {"<"}
            </button>
            <button className="button-right" onClick={next}>
              {">"}
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="Wrapper">
        <div className="carousel-info">
          <div className="carousel-logo">
            <img
              src={images[selectIndex].logo}
              alt="Logo Band"
              loading="lazy"
            />
          </div>
          <div className="carousel-ticket">
            <img src={images[selectIndex].ticket} alt="Ticket" loading="lazy" />
            <span> {images[selectIndex].tipoConcierto} </span>
          </div>
          <div className="carousel-description">
            <span> {images[selectIndex].title} </span>
            <span> {images[selectIndex].date} </span>
          </div>
          <div className="carousel-button button-principal">
            <Link to='/' title='Ver Más'>{images[selectIndex].button}</Link>
          </div>
        </div>
      </div>
    </>
  );
};
