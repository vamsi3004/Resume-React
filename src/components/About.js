import './About.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
function About() {
  
    return (
      <div className="About">
        <div className="row">
            <h1><FaUser className='icons user'/> About</h1><br/>
            <hr/>
        </div>
        <div className="row">
            <div className="col-4">
                <p><FaRegUser className='icons reguser'/>Name : Vamsi Kunche</p>
            </div>
            <div className="col-6">
                <p><FaRegUser className='icons reguser'/>Father Name : Venkata Krishna Kunche</p>
            </div>
        </div>
        <div className="row" style={{width:'600px'}}>
          <div className='col-3'>
          <FaHome className='icons home'/> Address :
          </div>
          <div className='col-7'>
            <p> 5-46 Gandhi Bomma Street, Gadrada, Korukonda Mandal ,East godavari District,<br/>
             Andhara Pradesh, 533289
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-4">
                <p><FaPhoneSquareAlt className='icons phone'/>Phone No : 8341664626</p>
            </div>
            <div className="col-6">
                <p><FaEnvelope className='icons email'/>Email : vamsikunche4689@gmail.com</p>
            </div>
        </div>
        <div className="row">
          <p>Social Profiles : </p>
        </div>

        <div className="row">
            <ul type="none" className='sp'>
              <li><FaLinkedin className='icons linkedin'/>Linkedin : <a href="www.linkedin.com/in/vamsi-kunche-363120215">www.linkedin.com/in/vamsi-kunche-363120215</a></li>
              <li><FaGithub className='icons github'/>  Github : <a href="https://github.com/vamsi3004">https://github.com/vamsi3004</a></li>
            </ul>

        </div>
        
      </div>
    );
  }
  
  export default About;