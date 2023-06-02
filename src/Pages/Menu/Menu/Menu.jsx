import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../Home/Home/shared/Cover/Cover";
import image from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  // use hook theke data ta asche json ar maddoma,
  const [menu] = useMenu();

  // then agulo k category ar modda theka filter kore data gulo anta hba  ========

  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      {/*our menu pae  cover page image and uporer title name  */}
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={image} title="our menu"></Cover>
      {/* cover component page  a cover photo ar details ase  */}

      {/* offerd page ar title  */}
      <div>
        <p className="text-center mb-4 mt-4 text-yellow-800 font-bold">
          ---Don't miss---
        </p>
        <h2 className="text-center text-3xl mb-8 border-y-4 w-96 mx-auto p-2 uppercase text-black font-semibold">
          TODAY'S OFFER
        </h2>
      </div>

      {/* offered ar jonno items k object kore MenuCategory component
      a pathay dice */}

      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu items*/}

      <MenuCategory items={desserts}  title={"Desert"} img={desertImg}></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

      {/* salad menu items */}
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>

      {/* Soup menu items */}
      <MenuCategory items={soup} title={"soup" }img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
