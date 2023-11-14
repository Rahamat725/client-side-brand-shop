import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import Brands from "../Brands/Brands";


const Home = () => {
    return (
        <div>
          
            <Navbar></Navbar>
            <Banner></Banner>
            <Brands></Brands>
            <h2>This is Home</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;