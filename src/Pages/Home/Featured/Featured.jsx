import featured from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20 ">
      <p className="text-center mb-4 text-yellow-800 font-bold">---Check it out---</p>
      <h2 className="text-center text-3xl mb-8 border-y-4 w-96 mx-auto p-2 uppercase text-black font-semibold">
        Featured Item
      </h2>
    <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
    <div>
      <img src={featured} alt="" />         
      </div>
      <div className="md:ml-10">
         <p className="font-semibold">Aug 20,2023</p>
         <p className="font-thin font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quos, ipsum veritatis illum vel voluptas nam quae quibusdam sapiente, quasi esse nostrum, aut labore quia rem tempore perferendis quo qui harum aliquid recusandae laudantium. Ex, autem incidunt. Similique quae molestias neque quam omnis, perferendis praesentium quasi, eaque porro provident incidunt?</p>      
         <button className="btn btn-outline btn-warning mt-3 border-0 border-b-4">Order NOw</button>
      </div>
    </div>
    </div>
  );
};

export default Featured;
