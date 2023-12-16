import "./Certification.css"
import { PiCertificateFill } from "react-icons/pi";
import { PiCertificateThin } from "react-icons/pi";
function Certification(){
    return(
        <div className="certifi">
            <div className="row">
                <h1>< PiCertificateFill className='icons cer'/>Certification</h1><br/>
            <hr/>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h6><b><PiCertificateThin className='icons ce'/>Bootcamp about HTML and CSS (02/2022 - 06/2022)</b></h6></li>   
                        <li>
                            <ul className="certi">
                                <li>Basics of web development and about the languages that are needed for web development</li>
                            </ul>
                        </li>    
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h6><b><PiCertificateThin className='icons ce'/>Python and Data Visualization Bootcamp (07/2022 - 03/2023)</b></h6></li>   
                        <li>
                            <ul className="certi">
                                <li>Basics of python and data visualization concept with numbpy and pandas lib</li>
                            </ul>
                        </li>    
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h6><b><PiCertificateThin className='icons ce'/>UI/UX Designing with Figma (06/2023 - 10/2023)</b></h6></li>   
                        <li>
                            <ul className="certi">
                                <li>Basics of ui/ux elements designing topology, sitemaps, wireframes, prototyping, and top to bottom designing web pages</li>
                            </ul>
                        </li>    
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h6><b><PiCertificateThin className='icons ce'/>Data Structures and Algorithms (05/2023 - Present)</b></h6></li>   
                        <li>
                            <ul className="certi">
                                <li>Different types of Data Structures and when to use them .Different types of Algorithms such as Sorting,Serching etc </li>
                            </ul>
                        </li>    
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Certification;