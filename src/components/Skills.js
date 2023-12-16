import "./Skills.css"
import { BsPersonFillGear } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { DiCode } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { MdDataArray } from "react-icons/md";
import { SiMysql } from "react-icons/si";

function Skills(){
    return(
        <div className="skil">
            <div className="row">
                <h1>< BsPersonFillGear className='icons sk'/>Skills</h1><br/>
            <hr/>
            </div>
            <div>
                <h6><u>Front-end </u>:</h6>
                <div className="mainclo">
                    <span className="tag-cloud">< FaHtml5 className='icons s'/>HTML5 - 2Y-6M</span>
                    <span className="tag-cloud">< FaCss3Alt  className='icons s'/>CSS3 - 2Y-6M</span>
                    <span className="tag-cloud">< FaBootstrap className='icons s'/>Bootstrap5 - 2Y</span>
                    <span className="tag-cloud">< IoLogoJavascript className='icons s'/>Javascript - 1Y</span>
                    <span className="tag-cloud">< FaReact className='icons s'/>React.js - 3M</span>
                    <span className="tag-cloud">< CgFigma  className='icons s'/>Figma - 6M</span>
                </div>
            </div>
            <div>
                <h6><u>Backend</u>:</h6>
                <div className="mainclo">
                    <span className="tag-cloud">< DiCode className='icons s'/>C - 2Y</span>
                    <span className="tag-cloud">< FaPython className='icons s'/>Python - 3Y-6M</span>
                    <span className="tag-cloud">< FaJava className='icons s'/>Java - 1Y</span>
                    <span className="tag-cloud">< MdDataArray className='icons s'/> Data Structures and Algorithms - 1Y</span>
                </div>
            </div>
            <div>
                <h6><u>Database</u>:</h6>
                <div className="mainclo">
                    <span className="tag-cloud">< SiMysql className='icons s'/>Mysql - 2Y</span>
                </div>
                
            </div>

        </div>
    );
}

export default Skills;