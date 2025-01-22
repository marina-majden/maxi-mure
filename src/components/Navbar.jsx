import { Link } from "react-scroll";

const Navbar = () => {
    const links = [
        { link: "About", section: "about" },
        { link: "Products", section: "products" },
        { link: "Reviews", section: "reviews" },
        { link: "Contact", section: "contact" },
    ];

    return (
        <div className='p-1 fixed right-0 z-50'>
            <ul className='flex justify-center m-1'>
                {links.map((link, index) => {
                    return (
                        <li key={index} className='py-4'>
                            <Link
                                to={link.section}
                                smooth={true}
                                spy={true}
                                duration={500}
                                offset={-130}
                                className=' cursor-pointer text-accent-50 px-4 py-3 text-lg font-semibold uppercase hover:text-accent-700  transition-all duration-300 '>
                                {link.link}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
