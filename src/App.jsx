import Interfaz from "./components/UI/Interfaz";
import MiApi from "./components/MiApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Interfaz>
        <h1 className="text-center"><i class="fa-regular fa-calendar-days"></i> Feriados en Chile <i class="fa-regular fa-calendar-days"></i></h1>
        <MiApi />
      </Interfaz>
    </>
  );
}

export default App;
