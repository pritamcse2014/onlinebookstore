import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTwitter } from 'react-icons/fa';
import './Footer.css'
import footerLogo from '../../assets/website/logo.png'

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-950">
            <div className="container">
                <div className="grid md:grid-cols-3 py-5">
                    <div className="px-5 py-8">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Book Store</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi et dolore facere praesentium earum. {" "}</p>
                        <br />
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Noida, Uttar Pradesh</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <p>123 456 789</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaTwitter className="text-3xl" />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="px-4 py-8">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((data) => (
                                            <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500" key={data.title}>
                                                <span>&#11162;</span>
                                                <span>{data.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="px-4 py-8">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((data) => (
                                            <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500" key={data.title}>
                                                <span>&#11162;</span>
                                                <span>{data.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="px-4 py-8">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((data) => (
                                            <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500" key={data.title}>
                                                <span>&#11162;</span>
                                                <span>{data.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-t-2 border-gray-300/50">
                        <p className="text-center py-10">Copyright &copy; 2024. All Right Reserved || Made with ❤️ by Pritam</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;