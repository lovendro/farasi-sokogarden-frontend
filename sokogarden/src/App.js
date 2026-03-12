import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MpesaComponent from './components/MpesaComponent';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProducts';

function App() {
  
  return (
    <Router>
  
    <div className="App">
      <header className="App-header">
        <h1>Sokogarden-Buy and sell online</h1>
      </header>
      <nav className='m-4'>
       <Link className='btn bg-dark m-3 text-white link'to='/signup' >signup</Link>
       <Link className='btn bg-dark m-3 text-white link'to='/signin' >Signin</Link>
       <Link className='btn bg-dark m-3 text-white link'to='/addproducts'>Add products</Link>
       <Link className='btn bg-dark m-3 text-white link'to='/'  >Get products</Link>
      
      </nav>

      <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/addproducts' element={<AddProducts/>}/>
          <Route path='/' element={<GetProducts/>}/>
          <Route path='/mpesa' element={<MpesaComponent/>}/>
        
      </Routes>
      

    </div>
    </Router>
  );
}

export default App;
