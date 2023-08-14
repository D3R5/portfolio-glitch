import './footer.css'
// import { FiInstagram } from 'react-icons/fi'
// import { FiTwitter } from 'react-icons/fi'
// import { FiTwitch } from 'react-icons/fi'
// import { CiYoutube } from 'react-icons/ci'


const Footer = () => {
    return (
        <footer>
            <a href="" className="footer__logo">DERS</a>
            <ul className="permalinks">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/portafolio">Portafolio</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            {/* <div className="footer__socials">
                <a href="https://www.instagram.com/diegooders/" target="_blank" rel='noreferrer'><FiInstagram/></a>
                <a href="https://twitter.com/Diegooders" target="_blank" rel='noreferrer'><FiTwitter/></a>
                <a href="https://www.twitch.tv/diegooders" target="_blank" rel='noreferrer'><FiTwitch/></a>
                <a href="https://www.youtube.com/channel/UC1c6eGpqAl-NSn6INA1VKeg" target="_blank" rel='noreferrer'><CiYoutube/></a>
            </div> */}

            <div className="footer__copyright">
                <small>Copyright &copy; DERS. 2023. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer