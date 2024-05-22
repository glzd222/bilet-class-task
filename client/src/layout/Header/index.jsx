import "../Header/index.scss"
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="header">
           <div className="img">
           <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
           <h1>Course</h1>
           </div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="courses">Courses</Link>
                </li>
                <li>
                  <Link to="elements">Elements</Link>
                </li>
                <li>
                  <Link to="news">News</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="contact">
            <BsFillTelephoneFill />

              <p>+43 4566 7788 2457</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header