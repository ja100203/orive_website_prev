import facebook from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import { FaRegCopyright } from "react-icons/fa";
import './Footer.css'
import logo from '../../assets/Orive Logo 4.png'

function Footer() {
  return (
    <div className="footer footer-f" id='footer-back'>
    <div className="footerContainer">
      <div className="footerSubContainer">
        <div className="footerHead">Contact info</div>
        <div>
          <div className="footerContentSet">
            <div className="footerHighlightTextOne" style={{marginRight:'10px'}}>Address:</div>
            <div className="footerNormalText">
              DCB-014, DLF Cyber City Rd, Chandaka Industrial Estate, Patia,
              Bhubaneswar, Odisha 751024,India
            </div>
          </div>
          <div className="footerContentSet">
            <div className="footerHighlightTextOne">Phone:</div>
            <a href="tel:9777798142" className="footerNormalText" style={{textDecoration:'none'}}>+91-9777798142</a>
          </div>
          <div className="footerContentSet">
            <div className="footerHighlightTextOne" style={{marginRight:'10px'}}>Email:</div>
            <a href='mailto:orivesolutions@gmail.com' className="footerNormalText footerEmail" style={{textDecoration:'none'}}>orivesolutions@gmail.com</a>
          </div>
        </div>
        <div className="inputContainer">
          <input placeholder="Enter your email" type="email" className="inputEmail"></input>
          <button className="subBtn">Subscribe</button>
        </div>
      </div>
      <div className="footerSubContainer">
        <div className="footerHead">IT Services</div>
        <div>
          <div className="footerNormalText">Bulk SMS</div>
          <div className="footerNormalText">Business Start-Up</div>
          <div className="footerNormalText">Web/App Development</div>
          <div className="footerNormalText">Enterprise Resources Planninng</div>
          <div className="footerNormalText">Human Resource Management</div>
          <div className="footerNormalText">Customer Relationship Management</div>
        </div>
      </div>
      <div className="footerSubContainer">
        <div className="footerHead">Quick links</div>
        <div>
          <div className="footerNormalText">About</div>
          <div className="footerNormalText">Blogs</div>
          <div className="footerNormalText">Terms & conditions</div>
          <div className="footerNormalText">Privacy policy</div>
          <div className="footerNormalText">Help & FAQ</div>
        </div>
      </div>
      <div className="footerSubContainer">
        <div>
        <img src={logo} alt="" className='footer-logo'/>
        </div>
        <div>
          <div className="footerNormalText">
            At Orive Solutions, we believe in the transformative power of
            technology. Our mission is to revolutionize industries, empower
            businesses, and enhance lives through cutting-edge IT solutions.
            Your Vision, Our Expertise, Together we Achieve Limitless Potential
          </div>
          <div className="footerContentSet-logo">
            <div className="footerHighlightText">Follow us:</div>
            <div className="footerSocialIconsContainer">
            <div className="side-logo-main">
            <a href="https://www.facebook.com/orivesolutions"><img src={facebook} /></a>  
            </div>
               
                    <div className="side-logo-main">
             <a href="https://twitter.com/OriveSolutions"><img src={twitter} /></a> 
            </div>

            <div className="side-logo-main">
           <a href="https://www.linkedin.com/in/orive-solutions-438a01296/"> <img src={linkedin} /></a>  
            </div>
            <div className="side-logo-main">
           <a href="https://www.instagram.com/orivesolutions/"><img src={instagram} /></a>   
            </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="hrBorder"/>
    <div className='footer-foot'>Copyright <FaRegCopyright/> 2023 All Rights Reserved by <a href='mailto:orivesolutions@gmail.com' className="footerHighlightText">Orive Solutions</a></div>
    <div/>
    </div>

  )
}

export default Footer

