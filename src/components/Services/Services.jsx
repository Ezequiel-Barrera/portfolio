import React from 'react'
import './Services.css'
import {FiCheck} from 'react-icons/fi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                        </li>
                    </ul>
                    <ul className='service__list'>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                        </li>
                    </ul>
                </article>
                {/* End of UI/UX */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Developer</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                        </li>
                    </ul>
                    <ul className='service__list'>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                        </li>
                    </ul>
                    <ul className='service__list'>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                        </li>
                    </ul>
                    <ul className='service__list'>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web Developer */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                        </li>
                    </ul>
                    <ul className='service__list'>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                        </li>
                    </ul>
                    <ul className='service__list'>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Content Creation */}
            </div>
        </section>
    )
}

export default Services