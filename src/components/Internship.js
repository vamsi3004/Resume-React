import { FaCalendarAlt } from "react-icons/fa";
import "./Internship.css"
import { MdWork } from "react-icons/md";
function Internship(){
    return(
        <div className="inte">
            <div className="row">
                <h1><MdWork className='icons intern'/>Internship</h1><br/>
            <hr/>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h3>Python programmer</h3></li>
                        <li><h4><b>HDLC Technologies</b></h4></li>
                        <div className="dtcgpa">
                            <l1><FaCalendarAlt className='icons cal'/>02/2023 - 04/2023</l1>
                            <l1>Virtual</l1>
                        </div>
                        <li><h7>Tasks : </h7></li>
                        <li> 
                            <ul>
                                <li>Developing Web Form using Streamlit</li>
                                <li>Developing simple mobile applications</li>
                            </ul>
                        </li>
                        <li><h7>Outcomes : </h7></li>
                        <li> 
                            <ul>
                                <li>Gained knowledge in developing applications using python</li>
                                <li>Knowledge about team handling and commanding</li>
                                <li>Gained insights of Data Visualisation</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            

        </div>
    );
}

export default Internship;