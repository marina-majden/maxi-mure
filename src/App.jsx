import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Slider from "./components/Slider";
import FlatCard from "./components/FlatCard";

function App() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-around items-center'>
                <Home />
                <About />
                <Products />

                <Slider />
                <Reviews />
                <FlatCard />

                <Contact />
                <Logo />
                <Footer />
            </div>
        </>
    );
}

export default App;
