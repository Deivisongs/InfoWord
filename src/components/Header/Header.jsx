import style from "./Header.module.css";
import { useState } from "react";

import logo from "../../img/logo.svg";

function Header() {
  const [menu, setMenu] = useState("off");

  function abrirMenu() {
    console.log("entrou");
    if (menu === "off") {
      setMenu("on");
    } else {
      setMenu("off");
    }
    console.log(menu);
  }

  return (
    <header className={style.header} id="header">
      <div className={style.headerContainer}>
        <div className={style.divLogo}>
          <a href="https://xhl5xg-3000.csb.app/">
            <img src={logo} alt="imagem logo" />
          </a>
        </div>
        <div
          className={menu === "on" ? `${style.divNavOn}` : `${style.divNav}`}
        >
          <nav className={style.nav}>
            <ul>
              <li>
                <a
                  href="https://brasilescola.uol.com.br/geografia/maiores-paises-planeta.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Principais Países
                </a>
              </li>
              <li>
                <a
                  href="https://brasilescola.uol.com.br/geografia/maiores-paises-planeta.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Maiores Países
                </a>
              </li>
              <li>
                <a
                  href="https://www.remessaonline.com.br/blog/menor-pais-do-mundo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Menores Países
                </a>
              </li>
            </ul>
          </nav>
          <div className={style.favoritos}>
            <a href="">
              <button>
                <span className="material-symbols-outlined">star</span>
                <p>Favoritos</p>
              </button>
            </a>
          </div>
        </div>
        <div className={style.btnToggle}>
          <button onClick={abrirMenu} id="btnToggle">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
