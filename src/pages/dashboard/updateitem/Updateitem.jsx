import { useLoaderData } from "react-router-dom";


const Updateitem = () => {
    const loader=useLoaderData()
    console.log(loader)
    return (
        <div>
            <div><h1 className="text-center">update item</h1></div>
        </div>
    );
};

export default Updateitem;