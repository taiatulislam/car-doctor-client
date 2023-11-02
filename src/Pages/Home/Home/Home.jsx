import About from "../About/About";
import Banner from "../Banner/Banner";
import PopularProduct from "../PopularProduct/PopularProduct";
import Service from "../Service/Service";
import Stat from "../Stat/Stat";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Stat></Stat>
            <PopularProduct></PopularProduct>
            <Team></Team>
        </div>
    );
};

export default Home;