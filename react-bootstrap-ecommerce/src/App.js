import { Switch,Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Root from "./Root";
import Home from "./Components/Pages/Home";
import ContactUS from "./Components/Pages/ContactUs";
import ProductDetails from "./Components/Pages/ProductDetails";
import Login from "./Components/Pages/Login";

//  const router=createBrowserRouter([
//   {path:'/main',element:<Root/>},{path:'/about',element:<About/>},{path:'/',element:<Login/> },
//   {path:'/home',element:<Home/>},{path:'/contactus',element:<ContactUS/>},
//   {path:'/productdetails/:productname',element:<ProductDetails/>}
// ]);

const App=()=> {

  return (
  <Switch>
      <Route path='/' exact>
     <Root/>
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
