import React from 'react';


function AboutPage() {
    const containerStyle = {
      backgroundColor: "#222",
      height: "100%",
      minHeight: "100vh",
      color: "white",
    };
  
    const lineStyle = {
      width: '30px',
      borderTop: '2px solid #FFB400',
      margin: '0 5px',
    };
  
    const textCenterStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  
    const picBorder = {
      width: '440px',
      height: '440px',
      border: '6px solid #FFB400',
      margin: '50px 50px'
    };
    const picBorderStyle = {
      width: "440px",
      height: "440px",
      border: "6px solid #FFB400",
      margin: "50px 50px",
      position: "relative", // Added for positioning the image
    }
  
    const imageStyle = {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      objectFit: "cover", // This ensures the image covers the entire area
    }
  
    return (
      <div style={containerStyle}>
        <div className='container'>
          <div className='row border-bottom'>
            <h1 id="aboutme" className='text-center mt-5 page-title'>
              ABOUT <span style={{ color: "#ffb400" }}>ME</span>
            </h1>
            <p style={textCenterStyle} className='mt-3'>
              <div style={lineStyle} className='mx-3'></div>
              <span style={{color: "white", opacity: "80%"}}>I DESIGN AND CODE BEAUTIFUL THINGS ,  AND I LOVE WHAT I DO .</span>
              <div style={lineStyle} className='mx-3'></div>
            </p>
            <div className="col mt-5">
              <div style={picBorderStyle}>
                <img src="Images/MyImage1.jpg" alt="My Image" style={imageStyle} />
              </div>
            </div>
            <div className='col mt-5'>
              <div className='row' style={{fontSize:"17px",marginTop:"100px",lineHeight:'1.9em'}}>
                <div className='col'>
                  <div className='row'>
                      <div className='col-5'>
                          <p style={{color: 'white', opacity: "80%"}}>First Name</p>
                          <p style={{color: 'white', opacity: "80%"}}>Last Name</p>
                          <p style={{color: 'white', opacity: "80%"}}>Birthdate</p>
                          <p style={{color: 'white', opacity: "80%"}}>Nationality</p>
                          <p style={{color: 'white', opacity: "80%"}}>Address</p>
                      </div>
                      <div className='col-5'>
                          <p>Shachi</p>
                          <p>L H Gowda</p>
                          <p>23 July 2004</p>
                          <p>Indian</p>
                          <p>Bangalore</p>
                      </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='row'>
                      <div className='col-4'>
                          <p style={{color: 'white', opacity: "80%"}}>Languages</p>
                          <p style={{color: 'white', opacity: "80%"}}>Phone</p>
                          <p style={{color: 'white', opacity: "80%"}}>Email</p>
                          <p style={{color: 'white', opacity: "80%"}}>Github</p>
                          <p style={{color: 'white', opacity: "80%"}}>LinkedIn</p>
                      </div>
                      <div className='col-7'>
                          <p>English, Hindi</p>
                          <p>+91 9148365003</p>
                          <p>shachilhgowda@gmail.com</p>
                          <p>Shachi-23</p>
                          <p>Shachi L H Gowda</p>
                      </div>
                  </div>
                </div>
                
              </div>
              
              <a
              href="CV/Shachi_L_h_Gowda_my_cv.pdf"
              download="Resume_Shachi_L_H_Gowda.pdf"
              className="btn mt-5"
              style={{ backgroundColor: "#ffb400", padding: "5px 20px", borderRadius: "100px" }}
            >
              <i className="fa fa-download" aria-hidden="true"></i> DOWNLOAD MY CV
            </a>
            
            
            </div>
          </div>
          <div className='row mt-5 mb-5 border-bottom'>
            <div className='col'>
                <h4 className=''>EDUCATION</h4>
                <div className='row mt-5'>
                    <div className='col-1'>
                        <img src='Images/bullet.png'/>
                    </div>
                    <div className='col'>
                        <p><i class="fa fa-calendar" aria-hidden="true"></i> 2022 - 2026</p>
                        <p className='' style={{fontSize:"17px"}}>BACHELOR DEGREE - <span style={{fontWeight:"bold"}}>PES UNIVERSITY</span></p>
                        <p style={{color:"white",opacity:"75%"}}>Currently in my third year of studies, <br/> pursuing a degree with a CGPA of 8.99.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1'>
                        <img src='Images/bullet.png'/>
                    </div>
                    <div className='col'>
                        <p><i class="fa fa-calendar" aria-hidden="true"></i> 2020 - 2022</p>
                        <p className='' style={{fontSize:"17px"}}>PRE-COLLEGE - <span style={{fontWeight:"bold"}}>TIMES COLLEGE</span></p>
                        <p style={{color:"white",opacity:"75%"}}>Completed 11th and 12th grades with 95.6%,<br/> showcasing academic excellence with dedication.</p>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-1'>
                        <img src='Images/bullet.png'/>
                    </div>
                    <div className='col'>
                        <p><i class="fa fa-calendar" aria-hidden="true"></i> 2010 - 2020</p>
                        <p className='' style={{fontSize:"17px"}}>ELEMENTARY - <span style={{fontWeight:"bold"}}>BGS</span></p>
                        <p style={{color:"white",opacity:"75%"}}>Completed primary and secondary education scoring <br/> 94.8%,with consistent academic achievement.</p>
                    </div>
                </div>
            </div>
            <div className='col'>
                <h4 className=''>CERTIFICATION</h4>
                <div className='row mt-5'>
                    <div className='col-1'>
                        <img src='Images/bullet.png'/>
                    </div>
                    <div className='col'>
                        <h5><i class="fa fa-certificate" aria-hidden="true"></i> WEB FULL STACK DEVELOPMENT</h5>
                        
                        <p className="mt-3"style={{color:"white",opacity:"75%"}}>Certified from APNA College, mastering front-end and back-end technologies including HTML, CSS, JavaScript, React.js, Node.js, and database management. This certification showcases my proficiency in building robust web applications.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1'>
                        <img src='Images/bullet.png'/>
                    </div>
                    <div className='col'>
                        <h5><i class="fa fa-certificate" aria-hidden="true"></i> HACKER RANK -</h5>
                        
                        <p className="mt-3"style={{color:"white",opacity:"75%"}}>Certified from HackerRank for solving 17 C language challenges, demonstrating proficiency in algorithmic problem-solving and C programming. This achievement highlights my skills in logical reasoning and coding efficiency.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1'>
                        <img src='Images/bullet.png'/>
                    </div>
                    <div className='col'>
                        <h5><i class="fa fa-certificate" aria-hidden="true"></i> HACKER RANK - MEDIUM</h5>
                        
                        <p className="mt-3"style={{color:"white",opacity:"75%"}}>I hold a HackerRank certificate for solving medium difficulty C language challenges, showcasing expertise in data structures and algorithms. This achievement underscores my strong understanding and practical application of foundational programming concepts.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className='row mt-5'>
            <h4 style={{fontWeight:"700"}}>SKILLS</h4>
            <img src='Images/skills.png'/>
            <img className="mb-4" src='Images/skills22.png' style={{width:"97%",marginLeft:"10px"}}/>
            <img className="mb-3" src='Images/skills3.png' style={{width:"98%",marginLeft:"7px"}}/>
          </div>
        </div>
      </div>
    );
  }



export default AboutPage;