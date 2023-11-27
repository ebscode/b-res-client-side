import featuredImg from '../../../assets/home/featured.jpg'
import './feature.css'
const Featured = () => {
    return (
        <div>
            
            <div className="text-center mb-3 mx-auto">
                <h1 className=" text-orange-500 mb-2">---popular menu---</h1>
                <h1 className="text-4xl uppercase mx-auto p-2 border-y-2 w-4/12 text-center">featured item</h1>
            </div>
            <div>
            <div className="featured-item bg-fixed text-white  my-20">
          
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-28 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>



            </div>
        </div>
    );
};

export default Featured;