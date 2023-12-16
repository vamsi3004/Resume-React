import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Topnav.css';
import Sidenavbar from './components/Sidenavbar';


function Topnav(){

    return(
        <div>
            <Container fluid>
                <Row >
                    <Col className='Profileimage'xs={4}><Image src="/ProfilePhoto.jpg" roundedCircle /></Col>
                    <Col className='Details' xs={7}>
                        <p className='nam'><strong>VAMSI KUNCHE</strong></p>
                        <p className='na'><u> Under Graduate</u></p>
                        <p className='n'style={{color:"#36454F",textAlign:'center'}}>Seeking a challenging position in a reputed organization where I can learn new skills,expand my knowledge
        and leverage my skills</p>
                    </Col>
                </Row>
            </Container>
            <Sidenavbar/>
            
        </div>

    );

}

export default Topnav;