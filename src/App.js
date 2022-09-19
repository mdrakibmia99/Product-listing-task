import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOUt from './routes/CheckOut/CheckOUt';
import Home from './routes/Home/Home';
import Process from './routes/Process/Process';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/productCheckOUt" element={<CheckOUt/>}/>
        <Route path='process' element={<Process/>}/>
      </Routes>
    </div>
  );
}

export default App;
