import HeaderPera from "../components/HeaderPera";
import { TiLocationOutline } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className="w-full flex flex-col gap-12 pt-28">
            <div>
                <HeaderPera heading={'Contact'}></HeaderPera>
            </div>
            <div className="w-full grid lg:grid-cols-2 gap-12 secondary rounded lg:px-36 lg:py-20 px-10 py-16">
                <div>
                    <h1 className="text-4xl leading-relaxed font-bold py-4 px-3">Every day open 9:00 AM to 10:00 PM, but closed on Wednesday.</h1>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table border-none">
                            <tbody>
                                <tr className="border-b-1 border-[#440001]">
                                    <th><TiLocationOutline className="text-4xl"></TiLocationOutline></th>
                                    <td className="text-xl">Plot No 23 & 25, Zam Zam Tower, Sonargaon Janapath, Dhaka 1230 1230 Dhaka, Dhaka Division, Bangladesh</td>
                                </tr>
                                <tr className="border-b-1 border-[#440001]">
                                    <th><FaPhone className="text-2xl"></FaPhone></th>
                                    <td className="text-xl">+8801856-083172</td>
                                </tr>
                                <tr className="">
                                    <th><MdEmail className="text-3xl"></MdEmail></th>
                                    <td className="text-xl">taraelegant@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;