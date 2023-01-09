import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain1.png'


const Logo = () => {
        return (
        <div style={{ height: '250px', width: '150px'}}>       
        <Tilt>
          <div className='br2 mt2 shadow-2 Tilt ml2'>
            <img src={brain} alt="brain logo" height='auto' width='auto'/>
          </div>
        </Tilt>
        </div>
      );
    };

export default Logo

