import { Children } from "react";
import { createBrowserRouter, RouterProvider,Link } from "react-router-dom";
import About from "./Components/Pages/About";
import Root from "./Root";
import Home from "./Components/Pages/Home";

 const router=createBrowserRouter([
  {path:'/',element:<Root/> },{path:'/about',element:<About/>},
  {path:'/home',element:<Home/>}
]);

const App=()=> {

  return (
    
      <RouterProvider  router={router}>
    
       </RouterProvider>
  );
}

export default App;
