import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventory from './components/Pages/AddInventory/AddInventory';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home/Home';
import Inventory from './components/Pages/Inventory/Inventory';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import MyItem from './components/Pages/MyItems/MyItem';
import Header from './components/Shared/Header/Header';
import Login from './components/UserAccount/Login/Login';
import NotFound from './components/Shared/NotFound/NotFound';
import Signup from './components/UserAccount/Signup/Signup';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import AboutUs from './components/Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      {/* <h1>BookPile</h1> */}
      <Header></Header>
      {/* <Header2></Header2> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:bookId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manage_inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/add_inventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path='/my_items' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>

        {/* <Route path='/my_items' element={<MyItem></MyItem>}></Route> */}
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* https://aqueous-forest-29360.herokuapp.com/ */}

      <Footer></Footer>
    </div>
  );
}

export default App;
