import { RouterProvider, createBrowserRouter  } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About/About';


let routers = createBrowserRouter([
    {path:'' , element: <Layout />, children: [
        {path: 'home', element: <Home />},
        {path: 'about', element: <About />},
        {path: 'gallery', element: <Gallery />},
        {path: 'contact', element: <Contact />},
        {path: 'products', element: <Products />}
    ]}
])


const App = () => {
  return (
    <RouterProvider router={routers}>
    
    </RouterProvider>
  );
};

export default App;
