import Topnav from '../Topnav';
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { BsPersonFillGear } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Sidenavbar.css'
function Sidenavbar() {
  
    return (
        <div>
            
            <div id="mySidenav" class="sidenav">
                <Link  id="About"to={"/"}><FaUser className='icons abouts'/>About</Link>
                <Link to={"/Education"} id="Education"><FaBookOpen className='icons abouts' />Education</Link>
                <Link to={"/PersonalProjects"} id="Personal_Projects"><GiMaterialsScience className='icons abouts'/>Personal Projects</Link>
                <Link to={"/Skills"} id="Skills">< BsPersonFillGear className='icons abouts'/>Skills</Link>
                <Link to={"/Certification"} id="Certification">< PiCertificateFill className='icons abouts'/>Certification</Link>
                <Link to={"/Internship"} id="Intership"><MdWork className='icons abouts'/>Intership</Link>
        </div>
        <div className='v1'></div>
      </div>
    );
  }
  
  export default Sidenavbar;