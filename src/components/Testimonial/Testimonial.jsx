import './Testimonial.css'
import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Satya Narayan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Sachin Tendulkar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        ],
    };
    return (
        <div>
            <div className="pb-10">
                <div className="container">
                    <div data-aos="slide-up" className="text-center mb-20 max-w-[600px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">What are Customer Says</p>
                        <h1 className="text-3xl font-bold">Testimonial</h1>
                        <p className="text-xs text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, in. {" "}</p>
                    </div>
                    <div data-aos="zoom-in">
                        <Slider {...settings}>
                            {
                                TestimonialData.map((data) => {
                                    return (
                                        <div className="my-6" key={data.id}>
                                            <div className="flex flex-col gap-4 shadow-lg px-6 py-8 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                                <div>
                                                    <img className="rounded-full w-20 h-20 object-contain" src={data.img} alt="Image" />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div>
                                                        <p className="text-gray-500 text-sm">{data.text}</p>
                                                        <h1 className="text-xl font-bold text-black/80 dark:text-white">{data.name}</h1>
                                                    </div>
                                                </div>
                                                <p className="absolute z-10 top-0 right-0 font-serif text-9xl text-black/20">,,</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;