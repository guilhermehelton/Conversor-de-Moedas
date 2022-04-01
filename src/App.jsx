import './App.css';

import Display from './components/Display';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Display moeda="Dólar Americano" moeda2="Real"/>
      <Footer/>
    </div>
  );
}

export default App;
