import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {GoMail} from 'react-icons/go'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>Ezequiel Andres Barrera</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href='https://www.facebook.com/hojadeniggler/'><FaFacebookF /></a>
                <a href='https://www.instagram.com/niggler2507/'><FaInstagram /></a>
                <a href='https://api.whatsapp.com/send?phone=5491161718034'><FaWhatsapp /></a>
                <a href='https://www.linkedin.com/in/ezequiel-javascript/'><FaLinkedin /></a>
                <a href='https://github.com/Ezequiel-Barrera'><FaGithub /></a>
                <a href='mailto:ezequiel.abarrera@gmail.com'><GoMail /></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; EZEQUIEL ANDRES Barrera, All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer