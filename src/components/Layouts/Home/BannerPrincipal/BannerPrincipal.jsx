import style from "./BannerPrincipal.module.css";
import { useState } from "react";

import fundoItalia from "../../../../img/fundoItalia.png";
import fundoParis from "../../../../img/fundoParis.png";
import fundoBrasil from "../../../../img/fundoBrasil.png";
import fundoSingapura from "../../../../img/fundoSingapura.png";

function BannerPrincipal() {
  const banners = [fundoItalia, fundoParis, fundoBrasil, fundoSingapura];
  const [index, setIndex] = useState(1);

  setTimeout(() => {
    document.getElementById("banner-principal").style.backgroundImage =
      `url(${banners[index]})`;

    if (index < banners.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }, 10000);

  return (
    <section className={style.section} id="banner-principal">
      <div className={style.sectionContainer}>
        <h1 className={style.title}>InfoWord</h1>
        <p className={style.subtitle}>Informação de Países em Cards</p>
      </div>
    </section>
  );
}
export default BannerPrincipal;
