import React from 'react';
import bag from '../media/icons/bag.svg';
import { useGlobalContext } from '../context';

function Navbar() {

  const {amount} = useGlobalContext();

  return (
    <nav className='nav'>

        <div className="nav-center">

            <h3>mobileShop</h3>

            <div className="nav-container">
                <img src={bag} alt="bag image" />

                <div className="amount-container">
                    <p className='total-amount'>{amount}</p>
                </div>  {/* className="amount-container" */}

            </div>  {/* className="nav-container" */}

        </div>  {/* className="nav-center" */}

    </nav>
  );
}

export default Navbar