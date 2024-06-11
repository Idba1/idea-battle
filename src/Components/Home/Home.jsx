import AdvertisementSection from "../../Pages/AdvertisementSection/AdvertisementSection";
import PopularContests from "../../Pages/PopularContests/PopularContests";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularContests></PopularContests>
            <AdvertisementSection></AdvertisementSection>
        </div>
    );
};

export default Home;