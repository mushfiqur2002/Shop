import { FaFacebook } from "react-icons/fa6";
import logoImage from "../assets/logo/shop_logo.png"
import { BsWhatsapp, BsYoutube } from "react-icons/bs";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 primary mt-24">
            <aside>
                <div className="flex-1 divItemCenter flex-col gap-3">
                    <img src={logoImage} className='w-16 h-16 rounded-full ring p-2'></img>
                    <h1 className=" lora-font pl-3 text-2xl font-bold">Ruma Traders</h1>
                </div>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-10">
                    <a href="https://www.facebook.com/taraelegant24"><FaFacebook className="w-8 h-8"></FaFacebook></a>
                    <a><BsWhatsapp className="w-8 h-8"></BsWhatsapp></a>
                    <a><BsYoutube className="w-8 h-8"></BsYoutube></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;