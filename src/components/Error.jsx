import { FaArrowAltCircleLeft, FaSadTear } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-[100vh] divItemCenter flex-col">
            <div className="divItemCenter flex-col py-16 px-52 gap-12 bg-[#FCDABF] rounded-[5%]">
                <div className="divItemCenter flex-col gap-12 text-[#440001]">
                    <span className="text-8xl"><FaSadTear></FaSadTear></span>
                    <h1 className="text-6xl text-center font-bold">404<br></br> Page Not Found</h1>
                </div>
                <div>
                    <button className="btn primary px-10" onClick={() => { navigate(-1) }}><FaArrowAltCircleLeft className="text-2xl"></FaArrowAltCircleLeft>GO Back</button>
                </div>
            </div>
        </div>
    );
};

export default Error;