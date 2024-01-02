import style from "./BarSearch.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

function BarSearch({ paisPesquisado, pesquisa }) {
  const [search, setSearch] = useState("");
  paisPesquisado(search);

  return (
    <div className={style.divSearch}>
      <input
        type="text"
        name="pesquisa"
        id="pesquisa"
        placeholder="Pesquisar"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className={style.btnSearch} onClick={pesquisa}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
}
BarSearch.propTypes = {
  paisPesquisado: PropTypes.func.isRequired,
  pesquisa: PropTypes.func.isRequired,
};
export default BarSearch;
