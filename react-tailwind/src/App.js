import "./App.css";
import sanFrancisco from "./img/sanFrancisco.jpg";
import { HomeIcon, MoonIcon } from "@heroicons/react/outline";
function App() {
  return (
    <div className="font-Montserrat">
      <nav></nav>
      <section className="w-full h-auto">
        <div id="home">
          <div className="w-full h-3/4">
            <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-20 lg:justify-start">
              <input
                className="rounded-full p-3 shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden"
                type="search"
                name=""
                id=""
                placeholder="San Francisco"
              />
              <div className="hidden h-auto lg:w-2/3 lg:flex pb-6">
                <p className="text-4xl ml-16 font-bold text-black">
                  Encuentra mas ubicaciones como esta
                </p>
              </div>
              <button className="text-xl text-primary font-semibold p-4 w-32 rounded-full shadow-sm bg-white transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16">
                Explorar
              </button>
            </div>
            <div className="w-full h-full lg:h-96 lg:bg-sanFrancisco lg:bg-cover lg:bg-center">
              <img className="lg:hidden" src={sanFrancisco} alt="imagen" />
            </div>
          </div>
        </div>
        <div className="p-6" id="recomendados">
          <p className="text-xl font-semibold text-primary"> Recomendados</p>
          <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4">
            <div className="Card">
              <div className="w-full h-3/5 rounded-t-lg bg-sanFrancisco bg-cover"></div>
              <div className="w-full h-2/5 bg-secondary rounded-b-lg">
                <p className="text-white font-bold text-xl px-4 py-2">
                  San Francisco
                </p>
                <p className="text-white text-base px-4">Bellos lugares</p>
              </div>
            </div>
            <div className="Card">
              <div className="w-full h-3/5 rounded-t-lg bg-sanFrancisco bg-cover"></div>
              <div className="w-full h-2/5 bg-white rounded-b-lg">
                <p className="text-terciary font-bold text-xl px-4 py-2">
                  San Francisco
                </p>
                <p className="text-terciary text-base px-4">Bellos lugares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 h-auto w-full lg:px-6" id="rentas_destacadas">
          <p className="text-3xl text-primary  font-semibold pb-6 mt-6">
            Rentas destacadas
          </p>
          <div className="w-full h-full flex flex-col space-y-6 items-center justify-center">
            <div className="w-full h-96 bg-red-200 rounded-xl ">
              <p className="Card-title"> Chicago</p>
              <p className="text-sm pl-8 text-black mr-24">
                Cuenta con 2 habitaciones, baño y cocina
              </p>
            </div>
            <div className="lg:flex lg:h-1/3 hidden lg:w-full space-x-4">
              {" "}
              <div className="w-full h-96 bg-red-200 rounded-xl lg:h-auto ">
                <p className="Card-title"> OChicago</p>
                <p className="text-sm pl-8 text-black mr-24">
                  Cuenta con 2 habitaciones, baño y cocina
                </p>
              </div>

              <div className="w-full h-full">
              <div className="w-full h-96 bg-red-200 rounded-xl">
                <p className="Card-title"> BChicago</p>
                <p className="text-sm pl-8 text-black mr-24">
                  Cuenta con 2 habitaciones, baño y cocina
                </p>
              </div>
              <div className="w-full h-96 bg-red-200 rounded-xl ">
                <p className="Card-title">AChicago</p>
                <p className="text-sm pl-8 text-black mr-24">
                  Cuenta con 2 habitaciones, baño y cocina
                </p>
              </div>
              </div>


            </div>
          </div>
        </div>
        <div className="w-full  h-full" id="faqs">
          <div className="w-full  h-full px-6 flex flex-col space-y-4">
            <p className="text-3xl text-primary font-semibold">FAQS</p>
            <div>
              <p className="text-xl font-medium text-primary">
                Politica de cancelacón
              </p>
              <p className="text-base pt-2">
                Para estancias menores a una semana
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full h-auto bg-gray-50 p-6 space-y-2">
        <p className="text-lg">Acerca de</p>
        <p className="text-sm text-gray-300">Inversionistas</p>
        <p className="text-sm text-gray-300">Empleos</p>
        <p className="text-sm text-gray-300">Terminos y condiciones</p>
        <p className="text-sm text-gray-300">Travel</p>
      </footer>
      <div
        id="tab_bar"
        className="h-16 w-full bg-blue-700 fixed left-0 bottom-0 shadow-md flex lg:hidden"
      >
        <a href="#home">
          <HomeIcon className="h-8 w-8 text-blue-500"></HomeIcon>
        </a>
        <button className="h-8 w-8">
          <MoonIcon className="h-8 w-8 text-blue-500"></MoonIcon>
        </button>
      </div>
    </div>
  );
}

export default App;
