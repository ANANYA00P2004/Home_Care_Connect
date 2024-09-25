import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./Pages/home/Home";
import {Choose} from "./Pages/choose/Choose"
import {UserLogin} from "./Pages/login/UserLogin"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/choose" element={<Choose/>}/>
      <Route path="/login" element={<UserLogin/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
