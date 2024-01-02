import style from "./CardPais.module.css";
import PropTypes from "prop-types";

function CardPais({
  id,
  image,
  name,
  capital,
  continent,
  language,
  population,
  area,
}) {
  return (
    <div className={style.card} key={id}>
      <div className={style.divImg}>
        <img src={image} alt="" />
      </div>
      <div className={style.text}>
        <h1>{name}</h1>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
        <p>
          <strong>Continente: </strong>
          {continent}
        </p>
        <p>
          <strong>Idioma: </strong>
          {language}
        </p>
        <p>
          <strong>População: </strong>
          {population}
        </p>
        <p>
          <strong>Area: </strong>
          {area} Km
        </p>
      </div>
    </div>
  );
}
CardPais.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  capital: PropTypes.string,
  continent: PropTypes.string,
  language: PropTypes.string,
  population: PropTypes.number,
  area: PropTypes.number,
};
export default CardPais;
