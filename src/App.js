import { Route, Routes } from 'react-router-dom';
import './App.css';
import Album from './Components/Pages/Album/Album';
import Home from './Components/Pages/Home/Home';
import Listen from './Components/Pages/Listen/Listen';
import Login from './Components/Pages/Login.js/Login';
import SignUp from './Components/Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/album' element={<Album></Album>}></Route>
        <Route path='/listen' element={<Listen></Listen>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
