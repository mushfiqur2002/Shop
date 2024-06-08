import Banner from "../components/Banner";
import ContactUs from "./ContactUs";
import Shop from "./Shop";
import { useNavigate } from "react-router-dom";
// color #440001 #FCDABF
const Home = () => {
    const navigate = useNavigate();
    const displayItem = 6;
    return (
        <div className="w-full flex flex-col">
            <Banner></Banner>
            <Shop limit = {displayItem}></Shop>
            <div className="w-full divItemCenter pt-12">
                <button className="rounded py-3 px-10 primary text-lg" onClick={() => navigate(`/shop`)}> View More</button>
            </div>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;


