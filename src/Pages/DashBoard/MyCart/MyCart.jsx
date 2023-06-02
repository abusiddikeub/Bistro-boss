import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/CartAddHooks/CartHooks";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart,refetch] = useCart();
  console.log(cart);

  // reduce kore 
// jog ,then ja kno kichu then return korche price ta total price ta k 
// how does reduce work ---------
  const total = cart.reduce((sum,item)=> item.price + sum,0)

  const handleDelete = item =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
      // delete korer option --------------
      fetch(`http://localhost:5000/carts/${item._id}`,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(data =>{
        if(data.deletedCount > 0){
          refetch();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

      }
    })
  }

  return (
    <div className="w-full ">
      <Helmet>
        <title>Bistro Boss | MY Cart</title>
      </Helmet>

      <div className="font-semibold h-[60px] flex justify-evenly">
        <h2>Total Items : {cart.length}</h2>
        <h2>Total price : {total}</h2>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div className="overflow-x-auto w-full">
  <table className="table w-full text-center">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        cart.map((item,index )=> <tr key={item._id}>
        
          <td>
          {index+1}
          </td>
          <td>
      
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
          </td>
          <td>
           {item.name}
            <br/>
          </td>
          <td className="text-center">$ {item.price}</td>
          <td>
            <button
            onClick={()=>handleDelete(item)}
            className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt ></FaTrashAlt></button>
          </td>
        </tr>)
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyCart;
