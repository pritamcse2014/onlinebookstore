import './AppStore.css'
import board from '../../assets/website/board.png'
import playStore from '../../assets/website/play_store.png'
import appStore from '../../assets/website/app_store.png'

const bannerImg = {
    backgroundImage: `url(${board})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const AppStore = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 text-white py-10" style={bannerImg}>
            <div className="container">
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 data-aos="slide-up" className="text-2xl text-center sm:text-4xl font-semibold">Read Books at Your Fingertips</h1>
                    <div data-aos="slide-up" className="flex flex-wrap justify center items-center gap-4 ml-20">
                        <a href="#">
                            <img className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" src={playStore} alt="Play Store" />
                        </a>
                        <a href="#">
                            <img className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" src={appStore} alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStore;