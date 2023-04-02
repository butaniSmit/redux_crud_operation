import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer/>
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
