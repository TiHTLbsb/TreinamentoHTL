import './CSS/App.css';
import 'reset-css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Paginas/Home';
import Modulo1 from './Paginas/Modulo1';
import Modulo2 from './Paginas/Modulo2';
import Modulo3 from './Paginas/Modulo3';
import Modulo4 from './Paginas/Modulo4';
import Modulo5 from './Paginas/MOdulo5';
import Modulo6 from './Paginas/Modulo6';
import Login from './Paginas/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/modulo1' element={<Modulo1 />} />
          <Route exact path='/modulo2' element={<Modulo2 />} />
          <Route exact path='/modulo3' element={<Modulo3 />} />
          <Route exact path='/modulo4' element={<Modulo4 />} />
          <Route exact path='/modulo5' element={<Modulo5 />} />
          <Route exact path='/modulo6' element={<Modulo6 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
