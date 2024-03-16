import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon" 
        data-aos = "zoom-in-up"
        data-aos-duration = '1000'
        >
            <a href='https://twitter.com/harsh130745' target='_blank' className="items">
                <FaXTwitter className='icons' />
            </a>
            <a href='https://www.linkedin.com/in/harsh-bhola-b77297239/' target='_blank' className="items">
                <CiLinkedin className='icons' />
            </a>
            <a href='https://www.instagram.com/torato_h?igsh=NTFiYndlamQ1eDA3' target='_blank' className="items">
                <FaInstagram className='icons'/>
            </a>
            <a href='https://github.com/harsh0895' target='_blank' className="items">
                <FaSquareGithub className='icons' />
            </a>
            <a href='https://leetcode.com/Harsh_bhola/' target='_blank' className="items">
                <SiLeetcode className='icons' />
            </a>
            <a href='mailto:harshbhola7404888499@gmail.com' target='_blank' className="items">
                <SiGmail className='icons' />
            </a>
        </div>
      </div>
    </>
  )
}

export default Contact
