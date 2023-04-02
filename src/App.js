import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;
