import Banner from "./Banner/Banner";
import Category from "./category/Category";
import Featured from "./featured/Featured";
import PopularMenu from "./popularMenu/PopularMenu";
import Testimonials from "./testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;