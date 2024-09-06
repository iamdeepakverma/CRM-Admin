import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import Dasboard from './components';
// import Header from './components/Sidebar';
import About from './Pages/About';
import Setting from './Pages/Setting';
import Home from './Pages/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './Pages/Account';
import User from './Pages/User';
import BarChart from './components/BarChart';
import Dasboard from './Pages/Dasboard';
// import Setting from './components/Setting';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/about'} element={<About/>}></Route>
      <Route path={'/Setting'} element={<Setting/>}></Route>
      <Route path={'/signin'} element={<SignIn/>}></Route>
      <Route path={'/signup'} element={<SignUp/>}></Route>
      <Route path={'/signup'} element={<SignUp/>}></Route>
      <Route path={'/account'} element={<Account/>}></Route>
      <Route path={'/user'} element={<User/>}></Route>
      <Route path={'/barchart'} element={<BarChart/>}></Route>
      <Route path={'/dasboard'} element={<Dasboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
