import './App.css';
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Contents */}
      <div className='content'>
        <h1>- website body -</h1>
      </div>
    </div>
  );
}

export default App;
