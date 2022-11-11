import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFund404 = () => {
    return (
        <div className='text-center'>
            <img className='w-2/4 mx-auto' src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif" alt="" srcset="" />
            <p className='text-lg'>404 Page Not Found</p>
            <Link to='/courses'>
                <button className='btn btn-success'><FaArrowCircleLeft /> Get All Courses</button>
            </Link>
        </div>
    );
};

export default NotFund404;