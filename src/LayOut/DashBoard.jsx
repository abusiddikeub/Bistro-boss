import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart,FaWallet,FaCalendar,FaHome,FaBookmark, FaRobot,FaFilter,FaUtensils,FaMenorah, FaBook, FaUsers } from "react-icons/fa";
import useCart from "../Hooks/CartAddHooks/CartHooks";

const DashBoard = () => {
  const [cart] = useCart();

// Admin : TODO data from the server to have dynamic isAdmin based on Data  

const isAdmin = true;


  return (
    <div className="drawer drawer-mobile ">
     
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">

               {/* outlet  */}

               <Outlet></Outlet>

               {/* outlet */}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content">

          {/* admin pannel create  admin hole nicer gulo dekeba na hole uporer gulo dekebe */}
            {
              isAdmin ? <>
              
              <li>
               <NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink>
         
              </li>

              <li>
               <NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils>Add Items </NavLink>
               </li>

               <li>
               <NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All Users</NavLink>
               </li>

               <li>
            <NavLink to='/dashboard/booking'><FaBook></FaBook>Manage Booking</NavLink>
            </li>
           
              
              </> : <>
                    <li>
               <NavLink to='/dashboard/home'><FaHome></FaHome>My Home</NavLink>
         
              </li>
              <li className="flex">
               <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
               <div className="badge badge-secondary ">+{cart?.length || 0}</div>
               </NavLink>
              </li>

               <li>
               <NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink>
               </li>

               <li>
               <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation </NavLink>
               </li>

             <li>
            <NavLink to='/dashboard/booking'><FaBookmark></FaBookmark>My Booking</NavLink>
            </li>
    
              </>
            }

      
          <div className="divider text-yellow-500" ></div>
          <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
          <li><NavLink to='/menu'> <FaRobot></FaRobot>Our Menu </NavLink></li>
          <li><NavLink to='/order/salad'><FaFilter></FaFilter> Order Food</NavLink></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
