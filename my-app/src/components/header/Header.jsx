import { useContext } from "react";
import { Navbar, Nav, Container, } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/blog_logo.png";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
import { toast } from "react-toastify";

const Header = () => {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);
    console.log(dispatch);
    
    const logout = () => {
             navigate("/register");
        dispatch({ type: "LOGOUT" });
        toast("Logout successfully");
        window.location.reload();
       
    
    };

    return (
        // <Navbar bg="light" expand="lg" className=" fixed-top ">
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo" className="w-25 h-25" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {" "}
                        {/* Use ms-auto to align items to the right */}
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        {/* <Nav.Link as={Link} to="/about">
              About
            </Nav.Link> */}
                        <Nav.Link as={Link} to="/contactus">
                            Contact us
                        </Nav.Link>
                        <Nav.Link as={Link} to="/createNewBlog">
                            Create blog
                        </Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link className="" onClick={logout}>
                                    Logout
                                </Nav.Link>
                                <Link to={`/user/${user._id}`}>
                                    <button className="blog__username">{user.name}</button>
                                </Link>
                            </>
                        ) : (
                            <Nav.Link as={Link} to="/signin">
                                Sign In
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

