import AdvertisementSection from "../../Pages/AdvertisementSection/AdvertisementSection";
import BestCreators from "../../Pages/BestCreators/BestCreators";
import PopularContests from "../../Pages/PopularContests/PopularContests";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularContests></PopularContests>
            <AdvertisementSection></AdvertisementSection>
            <BestCreators></BestCreators>
        </div>
    );
};

export default Home;