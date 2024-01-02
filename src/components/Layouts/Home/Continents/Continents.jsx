import { useState, useEffect } from "react";
import style from "./Continents.module.css";

//Import Components
import CardPais from "../../../CardPais/CardPais";
import Loading from "../../../Loading/Loading";
import BarSearch from "../../../BarSearch/BarSearch";

function Continents() {
  const [bd, setBD] = useState([]);
  const [america, setAmerica] = useState([]);
  const [asia, setAsia] = useState([]);
  const [africa, setAfrica] = useState([]);
  const [europa, setEuropa] = useState([]);
  const [oceania, setOceania] = useState([]);
  const [polar, setPolar] = useState([]);
  const [active, setActive] = useState([]);
  const [valorPesquisado, setValor] = useState("");

  const barPesquisaValor = (valor) => {
    setValor(valor);
  };

  useEffect(() => {
    const api = fetch("https://restcountries.com/v2/all")
      .then((res) => {
        res.json().then((dados) => {
          const arrayAmerica = [];
          const arrayAsia = [];
          const arrayAfrica = [];
          const arrayEuropa = [];
          const arrayOceania = [];
          const arrayPolar = [];

          dados.map((item) => {
            if (item.region === "Americas") {
              arrayAmerica.push(item);
            }
            if (item.region === "Asia") {
              arrayAsia.push(item);
            }
            if (item.region === "Africa") {
              arrayAfrica.push(item);
            }
            if (item.region === "Europe") {
              arrayEuropa.push(item);
            }
            if (item.region === "Oceania") {
              arrayOceania.push(item);
            }
            if (item.region === "Polar") {
              arrayPolar.push(item);
            }
          });

          setAmerica(arrayAmerica);
          setAsia(arrayAsia);
          setAfrica(arrayAfrica);
          setEuropa(arrayEuropa);
          setOceania(arrayOceania);
          setPolar(arrayPolar);
          setBD(dados);

          console.log(api);

          setActive(dados);
        });
      })
      .catch((erro) => {
        console.log(erro + "erro na requisição");
      });
  }, []);

  function montaTabela(x) {
    if (x === america) {
      document.getElementById("texto").textContent = "Países da América";
    } else if (x === asia) {
      document.getElementById("texto").textContent = "Países da Ásia";
    } else if (x === africa) {
      document.getElementById("texto").textContent = "Países da África";
    } else if (x === europa) {
      document.getElementById("texto").textContent = "Países da Europa";
    } else if (x === oceania) {
      document.getElementById("texto").textContent = "Países da Oceania";
    } else if (x === polar) {
      document.getElementById("texto").textContent = "Setores Polares";
    }

    return x && x.length > 0 ? (
      x.map((item) => (
        <CardPais
          key={item.name}
          image={item.flags.svg}
          name={item.translations.pt}
          capital={item.capital}
          continent={item.region}
          language={item.languages[0].name}
          population={item.population}
          area={item.area}
        />
      ))
    ) : (
      <Loading />
    );
  }

  function btnPesquisa() {
    const result = bd.filter((item) =>
      item.translations.pt
        .toLowerCase()
        .includes(valorPesquisado.toLowerCase()),
    );

    if (valorPesquisado === "") {
      setActive(bd);
      document.getElementById("texto").textContent = `Todos os Países`;
    } else {
      setActive(result);
      document.getElementById("texto").textContent =
        ` Resultado pesquisa: ${valorPesquisado}`;
    }
  }

  useEffect(() => {
    btnPesquisa();
  }, [valorPesquisado, bd]);

  return (
    <section className={style.section}>
      <div className={style.sectionContainer}>
        <nav>
          <ul>
            <li onClick={() => setActive(america)}>América</li>
            <li onClick={() => setActive(asia)}>Asía</li>
            <li onClick={() => setActive(africa)}>Africa</li>
            <li onClick={() => setActive(europa)}>Europa</li>
            <li onClick={() => setActive(oceania)}>Oceania</li>
            <li onClick={() => setActive(polar)}>Polar</li>
          </ul>
        </nav>
        <div className={style.containerCards}>
          <div className={style.divTopo}>
            <h2 id="texto">Todos os Países</h2>
            <BarSearch
              paisPesquisado={barPesquisaValor}
              pesquisa={btnPesquisa}
            />
          </div>
          <div>{}</div>
          <div className={style.divCards}>{montaTabela(active)}</div>
        </div>
      </div>
    </section>
  );
}
export default Continents;
