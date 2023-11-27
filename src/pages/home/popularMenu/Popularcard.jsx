/* eslint-disable react/prop-types */


const Popularcard = ({item}) => {
    const{image,price,recipe,name}=item
    return (
        <div className="flex  gap-4 items-center">
            <div>
                <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            </div>
            <div>
                <div className="flex gap-44">
                <h1 className="uppercase">{name} --------------------</h1>
                <h1 className="text-yellow-600 font-medium">${price}</h1>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default Popularcard;