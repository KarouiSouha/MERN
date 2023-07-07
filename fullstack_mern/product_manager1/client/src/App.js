import Form from './components/Form';
import ShowOne from './components/showoneproduct';
import Show from './components/showproduct';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Form/>
    <Routes>
    <Route path='/' element={<Show />} />
    <Route path='/products/:id' element={<ShowOne />} />
    </Routes>
    </div>
  );
}

export default App;
