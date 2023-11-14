import { Link } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

function App() {

  return (
    <div className="App container">
      <nav className='header'>
        <Link to="" className='link'><img src='./favicon.ico' alt='logo' /></Link>
        <Link to="" className='link'>Home</Link>
        <Link to="about" className='link'>About</Link>
      </nav>
      <Layout />
      <div className='footer'>
        <a href='https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D1%96%D0%B2%D0%B5%D0%BD_%D0%9A%D1%96%D0%BD%D0%B3'>Link to full site</a>
      </div>
    </div>
  );
}

export default App;
