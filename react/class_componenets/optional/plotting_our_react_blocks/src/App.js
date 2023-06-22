import './App.css';
import './components/style.css'
import Header from './components/Header';

import Subcontent from './components/Subcontent';
import Navigation from './components/Navigation';
import Advertisement from './components/Advertisement';
function App() {
  return (
    <div className="App">
      <div class="container">
      <Header />
        <div class="row">
            <Navigation/>
   
            <div class="main">
                <div class="row">
                    <Subcontent/>
                    <Subcontent/>
                    <Subcontent/>
                </div>
                <Advertisement/>
            </div>
     
        </div>
    </div>
    </div>
  );
}

export default App;
