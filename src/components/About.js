import React from 'react'

const About = ({about, image="https://via.placeholder.com/215"}) => {
    return (
        <div>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </div>
    )
}

export default About
