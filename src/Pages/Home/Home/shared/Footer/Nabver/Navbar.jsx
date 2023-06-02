import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../../Routers/AuthProvider";
import { FaShoppingCart} from "react-icons/fa";
import useCart from "../../../../../../Hooks/CartAddHooks/CartHooks";
import { space } from "postcss/lib/list";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
// -------------cart Hook theka data anche  
const [cart] = useCart();


  const handleLogOut = () =>{
    logOut()
    .then(()=>{
  
    })
    .catch(error =>{
      console.log(error);
    })
  }



  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          BISTRO BOSS <br /> Restaurant{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/">
            {" "}
            <li className="mt-3">
              <a>Home</a>
            </li>
          </Link>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>
            <Link>
              <a>DASHBOARD</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/menu">
              {" "}
              <a>OUR MENU </a>
            </Link>
          </li>
          <li>
            <Link to="/order/salad">Order Food</Link>
          </li>
          <li>
            <Link to="/secret">Secret</Link>
          </li>
  
          {/* -------------- */}
          <li>
            <Link to="/dashboard/mycart">
              <button className="btn gap-2">
            <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
              </button>
            </Link>
          </li>

          {/* ------------------- */}
          <li className="mt-2">
              {
                user ? <> 
                    {/* <span>{user?.displayName}</span>: */}
                <button onClick={handleLogOut} className="btn btn-outline btn-secondary">LogOut</button>
                </>: <>
              <Link to='/login' className="btn btn-outline btn-secondary">Login</Link> 
                
                </>
          
              }
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
