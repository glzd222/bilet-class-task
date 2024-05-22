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
          <div className="headermiddle">
            <h1 className="h1">Get Your <span>Education</span> today!</h1>
          </div>

          <div className="headerbottom">
            <div className="divbuttons">
              <div className="div1">
                <div className="imgbottom"><img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" /></div>
                <div className="text">
                  <h1>Online courses</h1>
                  <h2>View More</h2>
                </div>
              </div>
              <div className="div2">
              <div className="div1">
                <div className="imgbottom"><img src="https://preview.colorlib.com/theme/course/images/books.svg" alt="" /></div>
                <div className="text">
                  <h1>Online courses</h1>
                  <h2>View More</h2>
                </div>
              </div>
              </div>
              <div className="div3">
              <div className="div1">
                <div className="imgbottom"><img src="https://preview.colorlib.com/theme/course/images/professor.svg" alt="" /></div>
                <div className="text">
                  <h1>Online courses</h1>
                  <h2>View More</h2>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header