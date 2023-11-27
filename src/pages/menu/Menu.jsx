import { Helmet } from "react-helmet";
import Cover from "../shared/cover/Cover";
import Popularcard from "../home/popularMenu/Popularcard";
import PopularMenu from "../home/popularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import Menucategory from "./menucategory/Menucategory";

import img from "../../assets/menu/banner3.jpg";
import img2 from "../../assets/menu/dessert-bg.jpeg";
import img3 from "../../assets/menu/pizza-bg.jpg";
import img4 from "../../assets/menu/salad-bg.jpg";
import img5 from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category == "dessert");
  const drinks = menu?.filter((item) => item.category == "drinks");
  const salad = menu?.filter((item) => item.category == "salad");
  const pizza = menu?.filter((item) => item.category == "pizza");
  const offered = menu?.filter((item) => item.category == "offered");
  return (
    <div>
      <Helmet>
        <title>menu</title>
      </Helmet>
      <Cover title="our menu" img={img}></Cover>
      <div>
        <div className="text-center mb-3 mx-auto">
          <h1 className=" text-orange-500 mb-2">---do not miss ---</h1>
          <h1 className="text-4xl uppercase mx-auto p-2 border-y-2 w-4/12 text-center">
            today offer
          </h1>
        </div>
        <Menucategory items={offered}></Menucategory>
      </div>

      {/* salad */}
      <div>
        <div className="text-center mb-3 mx-auto">
          <h1 className=" text-orange-500 mb-2">---do not miss ---</h1>
          <h1 className="text-4xl uppercase mx-auto p-2 border-y-2 w-4/12 text-center">
            dessert
          </h1>
        </div>
        <Menucategory title="salad" img={img2} items={salad}></Menucategory>
      </div>



{/* pizza */}


<div>
        <div className="text-center mb-3 mx-auto">
          <h1 className=" text-orange-500 mb-2">---do not miss ---</h1>
          <h1 className="text-4xl uppercase mx-auto p-2 border-y-2 w-4/12 text-center">
            pizza
          </h1>
        </div>
        <Menucategory title="pizza" img={img3} items={pizza}></Menucategory>
      </div>

{/* dessert */}

      <div>
        <div className="text-center mb-3 mx-auto">
          <h1 className=" text-orange-500 mb-2">---do not miss ---</h1>
          <h1 className="text-4xl uppercase mx-auto p-2 border-y-2 w-4/12 text-center">
            salad
          </h1>
        </div>
        <Menucategory title="dessert" img={img4} items={dessert}></Menucategory>
      </div>


{/* drinks */}

<div>
        <div className="text-center mb-3 mx-auto">
          <h1 className=" text-orange-500 mb-2">---do not miss ---</h1>
          <h1 className="text-4xl uppercase mx-auto p-2 border-y-2 w-4/12 text-center">
          soup
          </h1>
        </div>
        <Menucategory title="soup" img={img5} items={drinks}></Menucategory>
      </div>


    </div>
  );
};

export default Menu;
