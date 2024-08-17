import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import NavLinks from "./Navlinks";
import Container from "../../components/Container/Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-[88px]">
      <nav className="bg-[#fefefe] fixed z-10 top-0 w-full">
        <Container>
          <div className="flex justify-between items-center h-[88px] py-6 sm:px-0 px-2">
            <div className="sm:w-auto w-full flex items-center justify-between">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <span
                className="sm:hidden z-10 text-[#F8B84C]  text-xl"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <IoCloseOutline className="size-8" />
                ) : (
                  <FaBarsStaggered />
                )}
              </span>
            </div>
            <ul className="sm:flex sm:block hidden items-center gap-4 text-[#00112c] text-base font-medium">
              <NavLinks />
              <div className="w-[100px]">
                <select
                  id="countries"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected>ভাষা</option>
                  <option value="eng">ইংরেজি</option>
                  <option value="ban">বাংলা</option>
                </select>
              </div>
            </ul>
            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-white flex flex-col fixed w-full top-0 overflow-y-auto bottom-0 py-20 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
            >
              <NavLinks />
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
