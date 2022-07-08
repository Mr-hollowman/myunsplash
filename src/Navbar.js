import React from 'react';
import AddImage from './AddImage';

function Navbar() {
    return (
        <div className='mynav-container'>
            <div className='content'>
            <i className="fa fa-home"></i>
            <div className='banner left'>
                <h6>My Unsplash</h6>
                <p>mrHollowman</p>
            </div>
           

           
            <input type="text" className="form-control left" placeholder="Search" />



            </div>
            <AddImage />
        </div>
    );
}

export default Navbar;