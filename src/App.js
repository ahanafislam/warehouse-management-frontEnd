import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
