
import './App.css';
import Topnav from './Topnav';
import About from './components/About';
import Sidenavbar from './components/Sidenavbar';
import Education from './components/Education';
import Personalpo from './components/Personalpo';
import Internship from './components/Internship';
import Certification from './components/Certification';
import Skills from './components/Skills';
import {Routes,Route} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <div>
        <Topnav/>
        <Routes>
          <Route path="/" element={<About/>}></Route>
          <Route path="/Education" element={<Education/>}></Route>
          <Route path="/PersonalProjects" element={<Personalpo/>}></Route>
          <Route path="/Certification" element={<Certification/>}></Route>
          <Route path="/Skills" element={<Skills/>}></Route>
          <Route path="/Internship" element={<Internship/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
