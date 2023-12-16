import "./Personalpo.css"
import { GiMaterialsScience } from "react-icons/gi";
function Personalpo(){
    return(
        <div className="person">
            <div className="row">
                <h1>< GiMaterialsScience className='icons pro'/>Personal Projects</h1><br/>
            <hr/>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h7>SKIN DISEASE DETECTION AND CLASSIFICATION USING MATLAB <br/>(04/2022 - 03/2023)</h7></li>
                        <li>
                            <ul className="items"> 
                             <li> Created a work frame which help in finding the type of disease</li> 
                             <li> It works on CNN and SVM Machine learning techniques</li> 
                             <li>CNN is used to find the patterns in images to recognize objects, classes and categories . Using K-means clustering the input image is converted into 3 clusters of images .After selecting one cluster based on region of intrest</li>  
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h7>BMI CALCULATOR (02/2020 - 04/2022)</h7></li>
                        <li>
                            <ul className="items"> 
                             <li> It provides the BMI( Body Mass Index ) values of the person if we provide the required height and weight of the person</li> 
                             <li> Then the data is stored and shown to the person through a app</li> 
                             <li>With the data the app provide detail about our diet and excercising patterns</li>  
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row-info">
                    <ul type="none">
                        <li><h7>VOICE BASED HOME AUTOMATION USING MATLAB (04/2021 - 06/2021)</h7></li>
                        <li>
                            <ul className="items"> 
                            <li>. Speechbased Human-machine interaction has the potential to be the
                                    future of Human-machine interaction and recent advancements in
                                    technology have made it possible to operate computers and
                                    electronic devices through speech.
                            </li> 
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Personalpo;