import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Productspage from "./Pages/Productspage";
import Orderpage from "./Pages/Orderpage";
import Porderspage from "./Pages/Porderspage";
import Userspage from "./Pages/Userspage";
import Analyticspage from "./Pages/Analyticspage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>{/* Use the element prop to specify the component to render */}
          <Route path="/Signup" element={<Signup/>}/>{/* Use the element prop to specify the component to render */}
          <Route path="/products" element={<Productspage/>}/>
          <Route path="/norders" element={<Orderpage/>}/>
          <Route path="/porders" element={<Porderspage/>}/>
          <Route path="/users" element={<Userspage/>}/>
          <Route path="/analytics" element={<Analyticspage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
