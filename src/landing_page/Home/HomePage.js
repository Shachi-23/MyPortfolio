import React from 'react';
import './HomePage.css';
import Photo from './Photo';
import Info from './Info';
function HomePage() {
    return ( 
        <div className='fullpage'>
            <>
            <Photo />
            <Info />
            </>
        </div>
     );
}

export default HomePage;