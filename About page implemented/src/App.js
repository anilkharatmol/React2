import { Children } from "react";
import { createBrowserRouter, RouterProvider,Link } from "react-router-dom";
import About from "./Components/About";
import Root from "./Root";

 const router=createBrowserRouter([
  {path:'/',element:<Root/> ,Children:[ {path:'/about',element:<About/>}]},
 
]);

const App=()=> {

  return (
    
      <RouterProvider  router={router}>
    
       </RouterProvider>
  );
}

export default App;
