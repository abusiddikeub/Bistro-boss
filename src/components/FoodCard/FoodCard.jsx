import React, { useContext } from "react";
import { AuthContext } from "../../Routers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../Hooks/CartAddHooks/CartHooks";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe,_id } = item;

  //  navigate kore redirect koreno-----login page
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // useHook theka data asche -----
  const [,refetch]= useCart();

  // add to cart
  const handleAddToCart = (item) => {
    console.log(item);
    // 1st way
    // add to cart --------------server side theka data collect korche and 
    // method post dia data dekate hba

    if (user && user.email) {
      // akana cartItem ja property dawa ase oigulo add hoye jabe ---
      const cartItem = { foodId: _id, name, image, price, email: user.email };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart 
            Swal.fire({
              title: "Order Add to Cart successfully ",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
          console.log(data);
        });
    } else {
      Swal.fire({
        title: "please login to order to the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now !",
      }).then((result) => {
        if (result.isConfirmed) {
         
          navigate("/login", { state: { from: location } });
        }
      });
      // navigate ------------
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline btn-warning bg-slate-100 mt-3 border-0 border-b-4"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
