import { Outlet } from "react-router"
import Navbar from "./navbar/Navbar"
import Theme from "./themes/Theme"

const Applayout = () => {
  return (
    <>
       <Navbar />
       <Outlet />
       <Theme /> 
    </>
  )
}

export default Applayout