import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go'

function Home() {
    const [isAboutMouseOver, setIsAboutMouseOver] = useState(false);
    const [isContactMouseOver, setIsContactMouseOver] = useState(false);
    const [isExperienceMouseOver, setIsExperienceMouseOver] = useState(false);
    const [isPortfolioMouseOver, setIsPortfolioMouseOver] = useState(false);

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const navItems = [
        { text: 'INSTAGRAM ', altText: '1NSTAGR4M', link: 'https://www.instagram.com/diegooders/'},
        { text: 'LINKEDIN', altText: 'L1NKED1N', link: 'https://www.linkedin.com/in/diego-rivera-sprohnle-4829b2198/' },
        { text: 'GITHUB', altText: 'G17HUB', link: 'https://www.linkedin.com/in/diego-rivera-sprohnle-4829b2198/' },
        { text: 'YOUTUBE', altText: 'Y0UTUB3', link: 'https://www.youtube.com/channel/UC1c6eGpqAl-NSn6INA1VKeg' },
    ];

    return (
        <div className='container'>
            <div className="slide1" style={{ display: isAboutMouseOver ? 'flex' : 'none' }}>
                <h2>[ ABOUT ]</h2>
                <h2>[ ABOUT ]</h2>
                <h2>[ ABOUT ]</h2>
            </div>
            <div className="slide2" style={{ display: isContactMouseOver ? 'flex' : 'none' }}>
                <h2>[ CONTACT ]</h2>
                <h2>[ CONTACT ]</h2>
                <h2>[ CONTACT ]</h2>
            </div>
            <div className="slide3" style={{ display: isExperienceMouseOver ? 'flex' : 'none' }}>
                <h2>[ EXPERIENCE ]</h2>
                <h2>[ EXPERIENCE ]</h2>
                <h2>[ EXPERIENCE ]</h2>
            </div>
            <div className="slide4" style={{ display: isPortfolioMouseOver ? 'flex' : 'none' }}>
                <h2>[ PORTFOLIO ]</h2>
                <h2>[ PORTFOLIO ]</h2>
                <h2>[ PORTFOLIO ]</h2>
            </div>
            <Link
                to="/about"
                onMouseEnter={() => setIsAboutMouseOver(true)}
                onMouseLeave={() => setIsAboutMouseOver(false)}
            >
                <h1 className="glitch">
                    <span aria-hidden="true">ABOUT</span>
                    ABOUT
                    <span aria-hidden="true">ABOUT</span>
                </h1>
            </Link>
            <Link
                to="/contact"
                onMouseEnter={() => setIsContactMouseOver(true)}
                onMouseLeave={() => setIsContactMouseOver(false)}
            >
                <h1 className="glitch">
                    <span aria-hidden="true">CONTACT</span>
                    CONTACT
                    <span aria-hidden="true">CONTACT</span>
                </h1>
            </Link>
            <Link
                to="/experience"
                onMouseEnter={() => setIsExperienceMouseOver(true)}
                onMouseLeave={() => setIsExperienceMouseOver(false)}
            >
                <h1 className="glitch">
                    <span aria-hidden="true">EXPERIENCE</span>
                    EXPERIENCE
                    <span aria-hidden="true">EXPERIENCE</span>
                </h1>
            </Link>
            <Link
                to="/portfolio"
                onMouseEnter={() => setIsPortfolioMouseOver(true)}
                onMouseLeave={() => setIsPortfolioMouseOver(false)}
            >
                <h1 className="glitch">
                    <span aria-hidden="true">PORTFOLIO</span>
                    PORTFOLIO
                    <span aria-hidden="true">PORTFOLIO</span>
                </h1>
            </Link>
            <div className='header2'>
                <nav className='list2'>
                    <ul className='nav-list2'>
                        {navItems.map((item, index) => (
                            <li key={index} >
                                <a  className="link-hover"
                                    href={item.link}
                                    target='blank'
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {hoveredItem === index ? item.altText : item.text} 
                                </a>
                                <GoArrowUpRight className='arrow'/>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Home;
