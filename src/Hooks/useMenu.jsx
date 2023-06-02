import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
//   loading spinner set koranor jonno ----
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then(data =>{
               setMenu(data)})

               // loading setup ----
               setLoading(false)
   
  }, []);
// return kore dependenci te dite hba jano data ta pai
 return[menu,loading]

};

export default useMenu;
