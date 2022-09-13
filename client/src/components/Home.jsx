import Catalog from "./Catalog";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carousel from "./Carousel";

function Home() {
    return ( 
    <div>
        <NavBar/>
        <h1 className="flex items-center">vercel 3</h1>
        <Carousel/>
        <Catalog/>
        <Footer />
    </div> 
    );
}


export default Home;