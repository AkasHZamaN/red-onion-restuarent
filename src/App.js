import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breakfast from './Pages/Food/Breakfast/Breakfast';
import Launch from './Pages/Food/Launch/Launch';
import Dinner from './Pages/Food/Dinner/Dinner';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='/launch' element={<Launch></Launch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
