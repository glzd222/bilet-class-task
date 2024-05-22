import "../Footer/index.scss"
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";







const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="footer">
            <div className="footertop">
              <h1 > Subscribe to newsletter</h1>
              <div className="input">
                <input type="text" placeholder="Email Adress"/>
                <button type="submit">Subscribe</button>
              </div>
            </div>
            <br /><br /><br /><br /><br />
            <hr />
            <br /><br /><br />
            <div className="footerbottom">
              <div className="footerleft">
                <div className="footerlefttop">
                <div className="img"><img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" /></div>
                <div className="h1"><h1>COURSE</h1></div>
                </div>
                <p className="pp">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, atque. Dolorem rerum nihil odio quos error necessitatibus incidunt quae assumenda.</p>
              </div>
              <div className="footerright">
                <nav>
                  <ul className="menu">Menu
                    <li>
                      <Link>Home</Link>
                    </li>
                    <li>
                      <Link>About Us</Link>
                    </li>
                    <li>
                      <Link>Courses</Link>
                    </li>
                    <li>
                      <Link>News</Link>
                    </li>
                    <li>
                      <Link>Contact</Link>
                    </li>
                    
                  </ul>
                  <ul className="usefull">Usefull.link
                    <li>
                      <Link>Testimonials</Link>
                    </li>
                    <li>
                      <Link>FAQ</Link>
                    </li>
                    <li>
                      <Link>Communicity</Link>
                    </li>
                    <li>
                      <Link>Campuspictures</Link>
                    </li>
                    <li>
                      <Link>Tutisarf</Link>
                    </li>
                  </ul>
                  <ul className="son">Contact
                    <li className="lili">
                      <Link><IoLocationSharp className="sari" />
 Blvd Libertad, 34 m05200 Arévalo</Link>
                    </li >
                    <li className="lili">
                      <Link><BsFillTelephoneFill className="sari" />
 0034 37483 2445 322</Link>
                    </li>
                    <li className="lili">
                      <Link className="lili"><IoMailSharp className="sari" />
 0034 37483 2445 322</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <br /><br /><br /><br /><br />
            <hr />
            <div className="footermorebottom">
              <div className="left"><p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p></div>
              <div className="right">
                <div className="icons">
                <FaPinterest />
                <FaLinkedin />
                <FaInstagramSquare />
                <FaFacebook />




                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer