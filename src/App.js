import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import InventoryDetails from './Pages/Inventory/InventoryDetails/InventoryDetails';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/Shared/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './Pages/Inventory/ManageInventories/ManageInventories';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import MyItems from './Pages/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path="/inventory/:item_id" element={
          <RequireAuth>
            <InventoryDetails></InventoryDetails>
          </RequireAuth>
        }></Route>
        <Route path="/manage_inventory/" element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path="/add_new_item/" element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        }></Route>
        <Route path="/my_items/" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
