import { Switch,Route, Redirect } from "react-router-dom";
import About from "./Components/Pages/About";
import Root from "./Root";
import Home from "./Components/Pages/Home";
import ContactUS from "./Components/Pages/ContactUs";
import ProductDetails from "./Components/Pages/ProductDetails";
import Login from "./Components/Pages/Login";
import { useContext } from "react";
import AuthContext from "./Store/LoginContext";


const App=()=> {
const authcxt=useContext(AuthContext)
  return (
  <Switch>
      <Route path='/' exact>
     {authcxt.isLoggedIn && <Root/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
  <Route path='/about'>
    <About/>
    </Route>
    <Route path='/home'>
      <Home/>
    </Route>
    <Route path='/contactus'>
      <ContactUS/>
    </Route>
    <Route path='/login'>
      <Login/>
    </Route>
    <Route path='/productdetails/:productname'>
      <ProductDetails/>
    </Route>
  </Switch>
  );
}

export default App;
