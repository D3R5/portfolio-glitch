import { useState } from 'react';
import {GiPisces} from 'react-icons/gi'
import './Nav.css';

function Nav() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const navItems = [
        { text: 'HOME ', altText: 'H0M3', link: '/' },
        { text: 'ABOUT', altText: '4B0UT', link: '/about' },
        { text: 'CONTACT', altText: 'C0NT4CT', link: '/contact' },
        { text: 'EXPERIENCE', altText: '3XP3R13NC3', link: '/experience' },
        { text: 'PORTFOLIO', altText: 'P0RTF0L10', link: '/portfolio' },
    ];

    return (
        <div className='header'>
            <nav className='list'>
                <ul className='nav-list'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {hoveredItem === index ? item.altText : item.text}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='ders'><GiPisces/> DERS</div> 
            </nav>
        </div>
    );
}

export default Nav;
