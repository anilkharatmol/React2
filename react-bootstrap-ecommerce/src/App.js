import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./Components/Pages/About";
import Root from "./Root";
import Home from "./Components/Pages/Home";
import ContactUS from "./Components/Pages/ContactUs";
import ProductDetails from "./Components/Pages/ProductDetails";

 const router=createBrowserRouter([
  {path:'/',element:<Root/> },{path:'/about',element:<About/>},
  {path:'/home',element:<Home/>},{path:'/contactus',element:<ContactUS/>},
  {path:'/productdetails/:productname',element:<ProductDetails/>}
]);

const App=()=> {

  return (
    
      <RouterProvider  router={router}>
    
       </RouterProvider>
  );
}

export default App;
