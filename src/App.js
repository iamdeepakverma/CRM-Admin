import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './Pages/About';
import Setting from './Pages/Setting';
import Home from './Pages/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Signup/SignUp';
import Account from './Pages/Account';
import User from './Pages/User';
import BarChart from './Chart/BarChat/BarChart';
import Dasboard from './Pages/Dasboard';
import Devices from './Pages/Devices';
import Events from './Pages/Events';
import Assets from './Pages/Assest';
import Admin from './Pages/Admin';
import Users from './Pages/Users';
import Reports from './Pages/Reports';
import Logout from './components/LogOut/Logout';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/home'} element={<Home/>}></Route>
      <Route path={'/about'} element={<About/>}></Route>
      <Route path={'/Setting'} element={<Setting/>}></Route>
      <Route path={'/'} element={<SignIn/>}></Route>
      <Route path={'/signup'} element={<SignUp/>}></Route>
      <Route path={'/account'} element={<Account/>}></Route>
      <Route path={'/user'} element={<User/>}></Route>
      <Route path={'/barchart'} element={<BarChart/>}></Route>
      <Route path={'/dasboard'} element={<Dasboard/>}></Route>
      <Route path={'/devices'} element={<Devices/>}></Route>
      <Route path={'/events'} element={<Events/>}></Route>
      <Route path={'/assets'} element={<Assets/>}></Route>
      <Route path={'/admin'} element={<Admin/>}></Route>
      <Route path={'/users'} element={<Users/>}></Route>
      <Route path={'/report'} element={<Reports/>}></Route>
      <Route path={'/logout'} element={<Logout/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
