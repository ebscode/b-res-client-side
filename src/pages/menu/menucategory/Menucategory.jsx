import { Link } from "react-router-dom";
import Popularcard from "../../home/popularMenu/Popularcard";
import Cover from "../../shared/cover/Cover";


const Menucategory = ({items,title,img}) => {

    return (
        <div>
          {title &&  <Cover img={img} title={title}></Cover>}
                    <div className="md:grid grid-cols-2 gap-4 mb-8 mt-6">
{
    items?.map(item=><Popularcard key={item._id} item={item}></Popularcard>)
}
            </div> 
           <div className="flex items-center justify-center m-3">
           <Link to={`/ourshop/${title}`}><button className="btn btn-outline border-b-4 ">order your favourite food</button>  </Link>
           </div>
        </div>
    );
};

export default Menucategory;