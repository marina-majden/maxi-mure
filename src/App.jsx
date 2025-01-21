import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />

            <Home />
            <About />
            <Products />
            <Reviews />
            <Contact />

            <Footer />
        </div>
    );
}

export default App;
