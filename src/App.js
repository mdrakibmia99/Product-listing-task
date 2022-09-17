import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductCheckOut from './components/ProductCheckOut/ProductCheckOut';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/productCheckOUt" element={<ProductCheckOut/>} />
        
      </Routes>
    </div>
  );
}

export default App;
