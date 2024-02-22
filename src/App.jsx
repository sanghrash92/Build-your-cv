import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Profile, Profiles } from './components/profile'
import { Info, Infos } from './components/info'
import { Education, Edu } from './components/education'
import { Experience } from './components/experience'
import './App.css'
  
function App() {
  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
    const imgData = canvas. toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4', true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX= (pdfWidth - imgWidth * ratio) / 2;
    const imgY= 30;
    pdf.addImage (imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save('CV.pdf');
    });
    };

  const [formData, setFormData] = useState({
    name: '',
    currentPosition: '',
    aboutMe: '',
    phone: '',
    email: '',
    address: '',
    college: '',
    collegeYear: '',
    degree: '',
    degreeYear: '',
    skills: '',
  })
      
  const [formExperience, setFormExperiene] = useState({
    job: '',
    comp: '',
    from: '',
    to: '',
    description: ''
  })

  const [experiences, setExperiences] = useState([]);

  const WorkExp = () => {
    return (
      <div className="experience-container">
        <ul>
          {experiences.map((exp, index) => (
            <li key={index}>
              <h3>{exp.comp}</h3>
              <p>{exp.job}</p>
              <p>{exp.from} - {exp.to}</p>
              <p>{exp.description}</p>
              <br />
              </li>
          ))}
          
        </ul>
      </div>
    )
  }
    
  return (
    <div className='main'>
      <div className="label">
        <h1>Build Your CV</h1>
        <Profile setForm={setFormData} />
        <Info setAddress={setFormData} />
        <Education setData={setFormData} />
        <Experience formExp={formExperience}
                    setForm={setFormExperiene}
                    exp={experiences}
                    setExp={setExperiences} />
      </div>
      <div className="profile" ref={pdfRef}>
        <Profiles formProfile={formData} />
        <Infos formInfo={formData} />
        <Edu formEd={formData} />
        <WorkExp />
      </div>
      <div className='row text-center mt-5'>
        <button className="btn btn-primary" onClick={downloadPDF} >Download</button>
      </div>
    </div>
  )
}

export default App
