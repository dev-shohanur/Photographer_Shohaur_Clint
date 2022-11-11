import React from 'react';
import { FaEnvelope, FaFacebook, FaLocationArrow, FaPhone, FaVoicemail, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FooterBgImg from '../../footer-bg-img.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-100 text-base-content">
            <div style={{ backgroundImage: `url(${FooterBgImg})` }}>
                <span className="footer-title">This is Contact</span>
                <p className='flex items-center text-lg'>
                    <FaPhone className='mr-2' />
                    <span className="hover:text-red-500 cursor-pointer">
                        +880 1324 127931
                    </span>
                </p>
                <p className='flex items-center text-lg'>
                    <FaEnvelope className='mr-2' />
                    
                    <span className="hover:text-red-500 cursor-pointer">
                        photographer@shohanur.com 
                    </span>
                </p>
                <p className='flex text-lg'>
                    <FaLocationArrow className='mr-2' />
                    <span className="hover:text-red-500 cursor-pointer">
                        Flat: 1B, House: 58, Road: <br />
                        3, Block: B Niketon,<br />
                        Gulshan-1, Dhaka 1215
                    </span>
                </p>
            </div> 
            <div>
                <span className="footer-title">IMPORTANT LINK</span>
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/blog' className="link link-hover">Blog</Link>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <Link className='text-2xl'><FaFacebook/></Link>
                    <Link className='text-2xl'><FaYoutube/></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;