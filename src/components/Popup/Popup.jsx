import { IoCloseOutline } from 'react-icons/io5';
import './Popup.css'

const Popup = ({ orderPopup, handleOrderPopup }) => {
    return (
        <div>
            {
                orderPopup && 
                <div className="h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm bg-black/50">
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px]">
                        <div className="flex items-center justify-between">
                            <h1>Order Your Book</h1>
                            <div>
                                <IoCloseOutline onClick={() => handleOrderPopup(false)} className="text-2xl cursor-pointer" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <input className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" type="text" name="name" id="name" placeholder="Enter Your Name" />
                            
                            <input className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" type="email" name="email" id="email" placeholder="Enter Your Email" />

                            <input className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" type="text" name="address" id="address" placeholder="Enter Your Address" />
                            <div className="flex justify-center">
                                <button className="bg-primary text-white px-8 py-2 rounded-full">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Popup;