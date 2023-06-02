import React from "react";
import MenuItem from "../../../Home/Home/shared/MenuItem/MenuItem";
import Cover from "../../../Home/Home/shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  //object kora items k params dia nibo map sai ta dia korte hba ===== ja kno dia param
  // nawa jabe =====(items)

  return (
    <div className="pt-8">
      {/* button  */}
      <button className="btn btn-outline btn-black mt-3 border-0 border-b-4  mb-5 justify-center mx-auto">
      ORDER YOUR FAVOURITE FOOD
      </button>

      {/* dessert items ar cover photo */}
      {/* title jodi theka tahole cover phot dekabo na hole dekabona */}
      {title && <Cover img={img} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-10 my-16">

        {/* Menu item theka asche data gulo  */}
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      {/* title ar name dakanor jonno dynamic vabe title dite hba and router a tar order ar pase
      /:category name dite hba  */}

      <Link to={`/order/${title}`}> <button className="btn btn-outline btn-warning mt-3 border-0 border-b-4  mb-5 justify-center mx-auto">
      ORDER Now
      </button></Link>
    </div>
  );
};

export default MenuCategory;
