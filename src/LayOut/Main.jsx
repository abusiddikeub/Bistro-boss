import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Home/Home/shared/Footer/Footer";
import Navbar from "../Pages/Home/Home/shared/Footer/Nabver/Navbar";

const Main = () => {
      // login page no header and footer ar jonno ----
      const location = useLocation();
      console.log(location)
      const noHeaderFooter = location.pathname.includes('login') ||
      location.pathname.includes('signup')
  return (
    <div>
      {/* jkn login a thekba tkn header part dekabe na ay jonno or || dawa hoiche  */}
      {
         noHeaderFooter || 
         <Navbar></Navbar>}
      <Outlet></Outlet>
    { 
    noHeaderFooter ||
    <Footer></Footer>}
    </div>
  );
};

export default Main;
