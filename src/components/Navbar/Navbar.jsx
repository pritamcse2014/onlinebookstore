import './Navbar.css'
import Logo from '../../assets/website/logo.png'
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from '../DarkMode/DarkMode';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    
    {
        id: 2,
        name: "Services",
        link: "/#services",
    },
]

const DropdownLinks = [
    {
        name: "Trending Books",
        link: "/#",
    },

    {
        name: "Best Selling",
        link: "/#",
    },

    {
        name: "Authors",
        link: "/#",
    },
]

const Navbar = ({ handleOrderPopup }) => {
    return (
        <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <a className="font-bold text-2xl sm:text-3xl flex gap-2" href="#"><img className="w-10" src={Logo} alt="Logo" />Books</a>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <DarkMode />
                        </div>
                        <ul className="items-center gap-4 hidden sm:flex">
                            {
                                Menu.map((menu) => (
                                    <li key={menu.id}>
                                        <a className="inline-block px-4 py-4 hover:text-primary duration-200" href={menu.link}>{menu.name}</a>
                                    </li>
                                ))
                            }
                            <li className="group relative cursor-pointer">
                                <a className="flex items-center h-[72px] gap[2px]" href="/#">
                                    Quick Links
                                    <span>
                                        <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                                    </span>
                                </a>
                                <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                                    <ul>
                                        {
                                            DropdownLinks.map((data) => (
                                                <li key={data.name}>
                                                    <a className="inline-block w-full rounded-md p-2 hover:bg-primary" href={data.link}>{data.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <button onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300">
                            Order
                            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;