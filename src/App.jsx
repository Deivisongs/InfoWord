//Import css
import "./style.css";

//Import Componets
import Header from "./components/Header/Header";
import BannerPrincipal from "./components/Layouts/Home/BannerPrincipal/BannerPrincipal";
import Continents from "./components/Layouts/Home/Continents/Continents";
function App() {
  return (
    <div>
      <Header />
      <BannerPrincipal />
      <Continents />
    </div>
  );
}
export default App;
