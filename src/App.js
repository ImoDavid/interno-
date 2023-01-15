import { HomePage } from './containers/Homepage';
import './App.css';
import {Navbar }from './components/navbar';
import {Footer} from './components/footer';

function App() {
  return (
    <>
    <Navbar/>
   <HomePage/>
   <Footer/>
    </>
  );
}

export default App;
