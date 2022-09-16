import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Header/>} />
      </Routes>
    </div>
  );
}

export default App;
