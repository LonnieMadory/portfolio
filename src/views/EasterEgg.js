import React from 'react'; 
import { Link } from 'react-router-dom';

const EasterEgg = () => {
    return (
         <div class="easter-egg-jumbo-shrimp">
             JUMBO SHRIMP
             <div class="nav">
                <Link to="/portfolio">
                    Home
                </Link>
             </div>
             <div class="Mega-Shrimp">
                 <div class="Mega-mega-shrimp">
                     Mega-mega div
                 </div>
                 <div class="other-Mega-mega-shrimp">
                    Other Mega mega shrimp
                 </div>
             </div>
             <div class="img-lion-fish">

             </div>
        </div>
    );
};

export default EasterEgg;