import { Helmet } from "react-helmet";
import useaxiospublic from "../../../hooks/useaxiospublic";
import useAxiossecure, { axiosSecure } from "../../../hooks/useAxiossecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Additem = () => {
  const axiouspublic = useaxiospublic();
  const axiousecure = useAxiossecure();

  const handleadd = async(e) => {
    e.preventDefault();



    const form = e.target;
    const name = form.name.value;
    const recipe = form.recipe.value;
    const image = form.image.files[0];
    const category = form.category.value;

    const price = form.price.value;



    
    const res=await axiouspublic.post(image_hosting_api,{image},{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    console.log(res.data)
  
    const item = {
        name,
        recipe,
        image:res.data.data.display_url,
        category,
        price,
    };
  
const menures=await axiousecure.post('/menu',item)
console.log(menures.data)
    //   form.reset();
  };
  return (
    <div className="bg-fixed">
      <Helmet>
        <title>add product</title>
      </Helmet>
      <div className="  mt-6 overflow-hidden bg-white h-[80vh]  items-center flex justify-center dark:lg:">
        <form onSubmit={handleadd}>
          <h1 className="font-semibold text-2xl text-center mb-3">
            add product
          </h1>
          <div className="">
            <div className="mt-4">
              <input
                className=" w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="name"
                placeholder=" food name"
                required
                type="name"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-4">
              <input
                placeholder="Category"
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="category"
                type="text"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="Price"
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="price"
                type="text"
              />
            </div>
          </div>

          <div className="">
            <div className="mt-4 ">
              <textarea
                placeholder="recipe details"
                className="w-full px-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="recipe"
                type=""
                id=""
                cols="105"
                rows="6"
              ></textarea>
            </div>
          </div>
          <input
            type="file"
            name="image"
            className="file-input mt-3 w-full max-w-xs"
          />
          <div className="mt-4">
            <button
              type="submit"
              className=" px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              add item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Additem;
