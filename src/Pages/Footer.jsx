import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-3">
            <div className="container">

                {/* Title */}
                <h2 className="mb-3">NewsApp</h2>

                {/* Description */}
                <p className="mb-4">
                    NewsApp is a modern news platform where you can read the latest
                    updates from technology, business, sports and more.
                </p>

                {/* Social Icons */}
                <div className="mb-4">
                    <a href="https://www.linkedin.com/in/himanshuagarwal04/" className="btn btn-outline-light rounded-circle items-center mx-1">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://x.com/Himansh33864021" className="btn btn-outline-light rounded-circle mx-1">
                        <FaXTwitter />
                    </a>
                    <a href="mailto:himanshuagarwalskr@gmail.com" className="btn btn-outline-light rounded-circle mx-1">
                        <BiLogoGmail />
                    </a>
                    <a href="https://github.com/TechyCyb3r" className="btn btn-outline-light rounded-circle mx-1">
                        <FiGithub />
                    </a>
                </div>

                {/* Bottom */}
                <p className="mb-0">
                    © {new Date().getFullYear()} NewsApp | Designed & Developed by{" "}

                    <a
                        href="https://thehimanshu.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#0dcaf0",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Himanshu Agarwal
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;