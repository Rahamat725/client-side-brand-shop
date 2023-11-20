import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import Brands from "../Brands/Brands";
import NewsSubscribe from "./NewsSubscribe";
import Virtual from "./Virtual";
import AdvertiseImages from "./AdvertiseImages";
{/* <link rel="stylesheet" href="/src/App.css" /> */}

const Home = () => {
    return (
        <div className="">
          
            <Navbar></Navbar>
            <Banner></Banner>
            <Brands></Brands>
            <Virtual></Virtual>
            <AdvertiseImages></AdvertiseImages>
           <NewsSubscribe></NewsSubscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;