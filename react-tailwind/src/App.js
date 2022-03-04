import './App.css';
import sanFrancisco from './img/sanFrancisco.jpg';

function App() {
  return (
    <div className="font-Montserrat">
      <nav></nav>
      <div id="tab_bar"></div>
      <section  className='w-full h-screen'> 
        <div id='home'>
          <div className='w-full h-3/4'>
          <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center">
              <input className="rounded-full p-3 shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12" type="search" name="" id="" placeholder='San Francisco'/>
              <button className="text-xl text-primary font-semibold p-4 w-32 rounded-full shadow-sm bg-white transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110">Explorar</button>
            </div>
            <div className='w-full h-full'>
              <img src={sanFrancisco} alt='imagen'/>
            </div>
          </div>
        </div>
        <div className='p-6' id='recomendados'>
          <p className="text-xl font-semibold text-primary"> Recomendados</p>
          <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4">
          <div className='Card'>
            <div className='w-full h-3/5 rounded-t-lg bg-sanFrancisco bg-cover'></div>
            <div className='w-full h-2/5 bg-secondary rounded-b-lg'>
              <p className='text-white font-bold text-xl px-4 py-2'>San Francisco</p>
              <p className='text-white text-base px-4'>Bellos lugares</p>
            </div>
          </div>
          <div className='Card'>
            <div className='w-full h-3/5 rounded-t-lg bg-sanFrancisco bg-cover'></div>
            <div className='w-full h-2/5 bg-white rounded-b-lg'>
              <p className='text-terciary font-bold text-xl px-4 py-2'>San Francisco</p>
              <p className='text-terciary text-base px-4'>Bellos lugares</p>
            </div>
          </div>
          </div>
        </div>
        <div id='rentas_destacadas'></div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
