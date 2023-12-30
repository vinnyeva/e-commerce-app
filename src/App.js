import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import './index.css';

function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
