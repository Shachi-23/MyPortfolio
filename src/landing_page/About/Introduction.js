import React from 'react';

function Introduction() {
    return ( 
        <div className='intro'>
            <div className='introleft'>
            <p><span className='spanintroleft'>First Name</span><span className='spanintroright'>Shachi</span></p>
            <p><span className='spanintroleft'>Last Name</span><span className='spanintroright'>L H Gowda</span></p>
            <p><span className='spanintroleft'>Birthdate</span><span className='spanintroright'>23 july 2004</span></p>
            <p><span className='spanintroleft'>Nationality</span><span className='spanintroright'>Indian</span></p>
            <p><span className='spanintroleft'>Address</span><span className='spanintroright'>Banglore</span></p>
            </div>
            <div className='introright'>
            <p>Languages<span>English,Hindi</span></p>
            <p>Phone<span>=91 9148365003</span></p>
            <p>Email<span>shachilhgowda@gmail.com</span></p>
            <p>Github<span>Shachi-23</span></p>
            <p>LinkedIn<span>Shachi L H Gowda</span></p>
            </div>
        </div>
     );
}

export default Introduction;