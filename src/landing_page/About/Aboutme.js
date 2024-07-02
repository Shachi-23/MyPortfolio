import React from 'react';
import Introduction from './Introduction';
import Education from './Education';
import Certifications from './Certifications';
import Skills from './Skills';
import './Aboutpage.css';
function Aboutme() {
    return ( 
        <div className='aboutfullpage'>
            <h1 className='abouth1'>ABOUT <span className='abouttext'>ME</span></h1>
            <p>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
            <>
            <Introduction />
            <Education />
            <Certifications />
            <Skills />
            </>
        </div>
      );
}

export default Aboutme;