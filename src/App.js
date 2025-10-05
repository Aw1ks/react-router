import './App.css';

import NavBar from './components/NavBar';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<First/>}></Route>
          <Route path='/second' element={<Second/>}></Route>
          <Route path='/third' element={<Third/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
