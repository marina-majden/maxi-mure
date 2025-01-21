import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

function App() {
    /*   const blobCursor = function () {
        const cursor = document.querySelector("#cursor-blob");
        const link = document.querySelector("li");

        const setCursorPos = (e) => {
            let posX = e.pageX;
            let posY = e.pageY;

            cursor.style.top = posY - cursor.offsetHeight / 2 + "px";
            cursor.style.left = posX - cursor.offsetWidth / 2 + "px";
        };

        document.addEventListener("mousemove", setCursorPos);

        const setCursorHover = function () {
            cursor.style.transform = "scale(2.5)";
        };
        const removeCursorHover = function () {
            cursor.style.transform = "";
        };

        link.addEventListener("mouseover", setCursorHover);
        link.addEventListener("mouseleave", removeCursorHover);
    };

    blobCursor(); */
    return (
        <>
            <div id='cursor-blob'> </div>
            <Navbar />
            <Home />
            <About />
            <Products />
            <Reviews />

            <Contact />
            <Logo />
            <Footer />
        </>
    );
}

export default App;
