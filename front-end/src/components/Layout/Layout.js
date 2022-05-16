import { Fragment } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
const Layout = (props) => {
    return (
        <Fragment>
            <NavBar />
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

export default Layout;
