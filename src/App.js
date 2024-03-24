import { BrowserRouter,Route,Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>{/* Use the element prop to specify the component to render */}
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/Signup" element={<Signup/>}/>{/* Use the element prop to specify the component to render */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
