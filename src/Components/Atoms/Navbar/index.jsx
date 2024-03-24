import { IoIosLogOut } from "react-icons/io";
import { MdDarkMode, MdWbSunny } from "react-icons/md"; // Import icons

const Navbar = ({ onBackgroundChange, isDarkMode }) => {
  return (
    <div>
      {/*<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">*/}
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Admin panel
          </a>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav"></div>
          </div>
          <div onClick={onBackgroundChange} style={{marginRight:'20px',cursor:'pointer'}}>
            {isDarkMode ? <MdWbSunny size={30} /> : <MdDarkMode size={30}/>}{" "}
            {/* Use MdWbSunny icon for light mode and MdDarkMode icon for dark mode */}
          </div>
          <a style={{ cursor: "pointer" }} href="/">
            <IoIosLogOut size={30} color="#1d2274" />
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
