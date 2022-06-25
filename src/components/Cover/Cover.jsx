import React from 'react'
import './Cover.css'
import coverVideo from '../../assets/coverVideo.mp4'
import Header from '../Header/Header'

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={coverVideo} autoPlay loop muted />
            <Header />
        </div>
    )
}

export default Cover