import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import Brands from "../Brands/Brands";
{/* <link rel="stylesheet" href="/src/App.css" /> */}

const Home = () => {
    return (
        <div className="">
          
            <Navbar></Navbar>
            <Banner></Banner>
            <Brands></Brands>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;