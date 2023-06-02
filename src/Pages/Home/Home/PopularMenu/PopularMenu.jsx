
import MenuItem from "../shared/MenuItem/MenuItem";
import useMenu from "../../../../Hooks/useMenu";

const PopularMenu = () => {
// custom hooks theka asche data gulo ------------useMenu() ata component ar name ar 
// menu ta ta hosche state theka asche ---- useMenu custom hook

const [menu] = useMenu();
// menu hosche dependence theka ashce state hoye tai menu k filter kore popular ja 
// item ase saita k pabe ---- (category er modda popular item ta asa ----)

const popular = menu.filter(item => item.category === 'popular')

  return (
    <div className="mb-12">
      <p className="text-center mb-4 text-yellow-600">
        ---From 11:00am to 10:00pm---
      </p>
      <h2 className="text-center text-3xl mb-8 border-y-4 w-96 mx-auto p-2">
        POPULAR ITEMS
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
               {popular.map(item =><MenuItem
               key={item._id} 
               item={item}
               
               ></MenuItem>)}
      </div>
    </div>
  );
};

export default PopularMenu;
