import logo from './logo.svg';
import './App.css';
import  HomeComponent  from './features/components/home/Home';
import NavBarComponent from './features/components/navbar/NavBar';
import BodyComponent from './features/components/body/Body';
import FooterComponent from './features/components/footer/Footer';
import { FaHeart } from 'react-icons/fa';

function App() {
  return (
    <div>
      <NavBarComponent/>
    </div>
  );
}

export default App;
