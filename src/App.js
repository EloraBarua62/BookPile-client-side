import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Inventory from './components/Pages/Inventory/Inventory';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1>BookPile</h1>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/manage_inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
