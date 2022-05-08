import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import InventoryDetails from './Pages/Inventory/InventoryDetails/InventoryDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory/:item_id" element={<InventoryDetails></InventoryDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
