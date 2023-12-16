import "./Education.css";
import { FaBookOpen } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
function Education(){
    return(
        <div className="education">
            <div className="row">
            <h1> <FaBookOpen className='icons Education'/>Education</h1><br/>
            <hr/>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h4><IoSchoolOutline className='icons cap'/>Bachelor of Technology - (ECE)</h4></li>
                        <li><h6>Sagi Ramakrishnam Raju Engineering College - Bhimavaram</h6></li>
                        <div className="dtcgpa">
                            <l1><FaCalendarAlt className='icons cal'/>06/2019 - 04/2023</l1>
                            <l1>CGPA : 8.42</l1>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h4><IoSchoolOutline className='icons cap'/>Intermediate Education</h4></li>
                        <li><h6>Tirumala Junior Kalasala</h6></li>
                        <div className="dtcgpa">
                            <l1><FaCalendarAlt className='icons cal'/>06/2017 - 05/2019, </l1>
                            <l1>CGPA : 9.88</l1>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h4><IoSchoolOutline className='icons cap'/>Secondary Education</h4></li>
                        <li><h6>Oakwood the Rajahmundry School</h6></li>
                        <div className="dtcgpa">
                            <l1><FaCalendarAlt className='icons cal'/>05/2016 - 04/2017, </l1>
                            <l1>CGPA : 10</l1>
                        </div>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Education;