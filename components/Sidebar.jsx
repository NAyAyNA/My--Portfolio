import React from "react"


export default function Sidebar() {    
    return (
        <div>
            <img src="../components/img.jpg" className="profile-photo" />
            <h3 className="intro-text">Hey, This is Nayana! 👋 </h3>
            <p className="about-text"> Aspiring <b>Frontend Developer </b> 💻
            <br /><b>B.Tech</b> in Computer Science & <br />Engineering 🎓</p>
            <div className="iconspart">
                <ul className="icons">
                    <li className="social-list__item">
                        <a className="social-list__link" href="mailto:rnayana777@gmail.com" target="_blank">
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                    </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/nayana-r-a29606209/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/NAyAyNA" target="_blank">
                        <i className="fa-solid fa-code"></i>
                    </a>
                </li>
            </ul>
            </div>
        </div>
        )
    }