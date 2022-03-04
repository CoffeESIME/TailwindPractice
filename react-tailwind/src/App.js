import './App.css';
import sanFrancisco from './img/sanFrancisco.jpg';

function App() {
  return (
    <div>
      <nav></nav>
      <div id="tab_bar"></div>
      <section  className='w-full h-screen'> 
        <div id='home'>
          <div className='w-full h-3/4'>
          <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center">
              <input className="rounded-full p-3" type="search" name="" id="" placeholder='San Francisco'/>
              <button className="text-xl text-primary font-semibold p-4 w-32 rounded-full shadow-sm bg-white">Explorar</button>
            </div>
            <div className='w-full h-full'>
              <img src={sanFrancisco} alt='imagen'/>
            </div>
          </div>
        </div>
        <div className='p-20' id='recomendadas'>
          <div className='Card'>
            <div className='w-full h-3/5 rounded-t-lg bg-sanFrancisco bg-cover'></div>
            <div className='w-full h-2/5 bg-secondary rounded-b-lg'>
              <p className='text-white font-bold text-xl px-4 py-2'>San Francisco</p>
              <p className='text-white text-base px-4'>Bellos lugares</p>
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
