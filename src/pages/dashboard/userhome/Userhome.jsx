import { useContext } from "react";
import { authcontext } from "../../../provider/Authprovider";


const Userhome = () => {
   const {user}=useContext(authcontext)
    return (
        <div>
           <div className="text-center mt-4"> <h2 className="text-3xl">welcome</h2>

{
    user?.displayName?user.displayName :'back'
}</div>
        </div>
    );
};

export default Userhome;