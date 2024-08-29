import React from "react"

export default function Card(props) {
    let skills = props.skills
    return (
        <div className="card"
            style={{
                '--card-bg-img': `url(../images/${props.img})`,
                backgroundSize: 'cover'
                 }}> 
            <p className="card-title"> {props.title} </p>
            <ul className="skills-list2">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item2">
                        {skill}
                    </li>
                ))}
            </ul>
            <div className="card-links">
                <a className='card-link' href={props.github} target="_blank"> <i className="fab fa-github"></i> </a>
                <a className='card-link' href={props.link} target="_blank"> <i className="fa-solid fa-arrow-up-right-from-square"></i> </a>
            </div>
        </div>
        )
    }
    
    /*<img 
                src={`../images/${props.img}`} 
                className="card-image" 
            /> */