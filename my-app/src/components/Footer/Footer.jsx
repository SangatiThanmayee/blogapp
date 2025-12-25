import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import logo from "../../assets/images/blog_logo.png";
import { RiHomeOfficeFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    const date = new Date().getFullYear();

  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted mt-5">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <Link to="https://www.instagram.com/adarsh_helvar/" className="me-4 text-reset text-decoration-none">
              <FaInstagram style={{ fontSize: '30px' }}/>
            </Link>
            <Link to="https://www.linkedin.com/in/adarshahelvar/" className="me-4 text-reset text-decoration-none">
              <CiLinkedin style={{ fontSize: '30px' }}/>
            </Link>
            <Link to="https://github.com/adarshahelvar" className="me-4 text-reset text-decoration-none">
              <FaGithub style={{ fontSize: '30px' }}/>
            </Link>
            <Link to="https://helvaradarsh.vercel.app/" className="me-4 text-reset text-decoration-none">
              <CgWebsite style={{ fontSize: '30px' }}/>
            </Link>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img src={logo} alt="" className="w-25 h-25" />
                  CCS tech
                </h6>
                <p>
                  Where Tech Meets Tomorrow, We Lead the Way. Innovate, Elevate,
                  and Inspire, Crafting Solutions That Redefine the Digital
                  Landscape and Propel Success
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <Link to=" " className="text-reset text-decoration-none">
                    Web Development
                  </Link>
                </p>
                <p>
                  <Link to=" " className="text-reset text-decoration-none">
                    Android Development
                  </Link>
                </p>
                <p>
                  <Link to=" " className="text-reset text-decoration-none">
                  Education
                  </Link>
                </p>
                <p>
                  <Link to=" " className="text-reset text-decoration-none">
                  Finserv
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/createNewBlog " className="text-reset text-decoration-none">
                    Create Blog
                  </Link>
                </p>
                <p>
                  <Link to="/contactus " className="text-reset text-decoration-none">
                    Contact
                  </Link>
                </p>
                <p>
                  <Link to=" /about" className="text-reset text-decoration-none">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset text-decoration-none ">
                    Home
                  </Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                <RiHomeOfficeFill /> #10, Bengaluru-Honnavar Rd, Sagara, Karnataka 577401
                </p>
                <p>
                <CgMail />
                <a href="mailto:adarshaadi1997@gmail.com" className="text-reset text-decoration-none">
                   adarshaadi1997@gmail.com
                   </a>
                </p>
                <p >
                <FaPhoneAlt />  
                <a href="tel:+918660435323" className="text-reset  text-decoration-none">
                    +91 8660435323
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {date} Copyright:
          <a className="text-reset text-decoration-none fw-bold">
            ADARSHA HELVAR
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
