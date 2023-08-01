import './App.css';
import CardA from './components/cardA/CardA'
import CardB from './components/cardB/CardB';
import CardC from './components/cardC/CardC';


function App() {
  return (
    <div className='p-6'>
      <h1 className='font-mainText font-extrabold text-[40px] '> Hello Welcome ! Following are the different designs of cards... </h1>
      <div className='grid grid-cols-3 gap-5'>
        <div>
          <h3 className='font-mainText'> Card 1 </h3>
          <CardA/>
        </div>
        <div>
          <h3 className='font-mainText'> Card 2 </h3>
          <CardB/>
        </div>
        <div>
          <h3 className='font-mainText'> Card 3 </h3>
          <CardC/>
        </div>
      </div>
    </div>
  );
}

export default App;
