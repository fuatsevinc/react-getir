// import { useEffect, useState } from "react";
// import Catagories from 'api/categories.json';
// import Category from "./ui/Category";

// export default function Catagories() {
     
//     const [ categories, setCategories] = useState([]);
    
//     useEffect (() => {
//       setCategories(categories);
//     }, [])

//     return (
//       <div className="bg-white py-4">
//         <div className="container mx-auto">
//           <h3 className="text-sm font-semibold mb-3"> Kategoriler</h3>
//           <div className="grid grid-cols-10">
//             {categories && categories.map((category, index) => <Category key={index} category={category} />)}
//           </div>
//         </div>
       
//       </div>
//     )
//   }