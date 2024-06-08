import { FaPhone } from "react-icons/fa6";
import HeaderPera from "../components/HeaderPera";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
    return (
        <div className="divItemCenter flex-col mt-24">
            <div>
                <HeaderPera heading={'Contact'}></HeaderPera>
            </div>
            <div className="w-full grid lg:grid-cols-2 mt-12 gap-5 place-items-center">
                <div className="card shrink-0 w-[95%] max-w-lg shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Input Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Input your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea placeholder="Text Something" className="input input-bordered" required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="w-[90%] divItemCenter bg-base-300 flex flex-col py-8">
                    <iframe
                        className="p-4 w-[100%]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5004039298597!2d90.389420327779!3d23.87186809419163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c416ec497185%3A0x628e52943c152c40!2sZam%20Zam%20Tower!5e0!3m2!1sen!2sbd!4v1717859924500!5m2!1sen!2sbd"
                        width="500"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div>
                        <table className="table">
                            <tbody className="lg:flex">
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

export default ContactForm;
