import React from "react"

export default function Skills() { 
    const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'jQuery', 'API', 'GraphQL', 'Apollo', 'Figma','Git'];
       
    return (
        <div className="part-2">
            <h2 className="part-2-title"> Skills </h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
        )
    }