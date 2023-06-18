import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Product from './pages/Product';
import Payment from './pages/Payment';
import PaymentConfirm from './pages/PaymentConfirm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/product/:idShirt' element={ <Product /> } />
        <Route path='/payment' element={ <Payment /> } />
        <Route path='/paymentConfirm' element={ <PaymentConfirm /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;