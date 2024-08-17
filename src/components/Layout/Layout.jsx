import { Outlet } from "react-router-dom";
import Navbar from "../../share/Navbar/Navbar";
import Footer from "../../share/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
