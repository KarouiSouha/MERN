import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Welcome from './componentes/Welcome';
import Number from './componentes/Number';
import Show_color from './componentes/Show_color';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/home" element={<Welcome/>}/>
      <Route path="/:num" element={<Number/>}/>
      <Route path="/:word/:color1/:color2" element={<Show_color/>}/>
    </Routes>
    </div>
  );
}

export default App;
