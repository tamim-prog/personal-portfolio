import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Portfolio from "./pages/portfolio/Portfolio"
import Contact from "./pages/contact/Contact"
import { createBrowserRouter, RouterProvider } from "react-router"
import Applayout from "./components/Applayout"

const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Applayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/portfolio',
                    element: <Portfolio />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
            ],
        },
    ]);

  return <RouterProvider router={router} />
}

export default App