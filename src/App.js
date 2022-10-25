import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Album from './Components/Pages/Album/Album';
import Home from './Components/Pages/Home/Home';
import Listen from './Components/Pages/Listen/Listen';
import Login from './Components/Pages/Login.js/Login';
import NotFound from './Components/Pages/NotFound/NotFound';
import SignUp from './Components/Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/album' element={<Album></Album>}></Route>
        <Route path='/listen' element={<Listen></Listen>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
