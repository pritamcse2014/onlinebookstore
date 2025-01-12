import './BestBook.css'
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

const BooksData = [
    {
        id: 1,
        img: Book1,
        title: "Who's There",
        rating: 5.0,
        author: "Some",
    },
    {
        id: 2,
        img: Book2,
        title: "His Life",
        rating: 4.5,
        author: "John",
    },
    {
        id: 3,
        img: Book3,
        title: "Lost Boys",
        rating: 4.7,
        author: "Girl",
    },
];

const BestBook = ({ handleOrderPopup }) => {
    return (
        <div>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Trending Books</p>
                        <h1 className="text-3xl font-bold">Best Book</h1>
                        <p className="text-xs text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, in. {" "}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
                        {
                            BooksData.map((book) => (
                                <div key={book.id} data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] mb-20">
                                    <div className="h-[100px]">
                                        <img className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md" src={book.img} alt="Image" />
                                    </div>
                                    <div className="p-4 text-center">
                                        <div className="w-full flex items-center justify-center">
                                            <FaStar className="text-yellow-500" />
                                            <FaStar className="text-yellow-500" />
                                            <FaStar className="text-yellow-500" />
                                            <FaStar className="text-yellow-500" />
                                        </div>
                                        <h1 className="text-xl font-bold">{book.title}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{book.author}</p>
                                        <button onClick={handleOrderPopup} className="bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary">Order Now</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestBook;