import { Helmet } from "react-helmet-async";
import ChefRecomanded from "../../CHefRecomanded/ChefRecomanded";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner/Banner";
import ContactPage from "./ContactPage/ContactPage";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ContactPage></ContactPage>
      <ChefRecomanded></ChefRecomanded>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
