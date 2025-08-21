import { FaFacebook, FaLinkedin,  FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="text-center space-y-4 p-10 bg-blue-950  text-white">
            <nav className="grid grid-flow-col gap-4">
                <a href='#' className="text-4xl font-bold font-serif"><span className="text-[#F95A65]">Web</span> Wonders</a>
            </nav>
            <div className='md:flex justify-center md:gap-28'>
                <nav className='text-start mt-8 md:mt-0'>
                    <h3 className='text-xl font-serif mb-2 text-center'>Find us on social media</h3>
                    <div className="flex gap-5 justify-center items-center mt-3 text-2xl">
                        <a href='#'><FaFacebook /></a>
                        <a href='#'><FaTwitter /></a>
                        <a href='#'><FaLinkedin /></a>
                    </div>
                </nav>
            </div>
            <hr className='md:w-1/2 mx-auto'/>
            <aside>
                <p>Copyright © 2024 - All right reserved by Web Wonders</p>
            </aside>
        </footer>
    );
};

export default Footer;