import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Header() {
    const [visibleMenu, setVisibleMenu] = React.useState(false);
    const headerRef = React.useRef();

    const toggleVisibleMenu = () => {
        setVisibleMenu(!visibleMenu);
    }

    const clickOnLogo = () => {
        window.scrollTo(0, 0)
        setVisibleMenu(false)
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])
    
    const handleOutsideClick = (event) => {
        var path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(headerRef.current)) {
            setVisibleMenu(false);
        }
    }

    return (
        <header ref={headerRef} className={visibleMenu ? 'mobile-header' : undefined}>
            <div className="container">
                <div className="header-content">
                    <Link to="/">
                        <div className="logo" onClick={clickOnLogo}>
                            <img src='../logo.svg' alt="BATASH" />
                        </div>
                    </Link>
                    
                    <div className={"full-menu " + (visibleMenu && ('open-menu'))}>
                        <ul className="header-menu">
                            <li onClick={toggleVisibleMenu}><Link to="/coffee">Кофе</Link></li>
                            <li onClick={toggleVisibleMenu}><HashLink to="/#service">Услуги</HashLink></li>
                            <li onClick={toggleVisibleMenu}><HashLink to="/#delivery">Доставка</HashLink></li>
                            <li onClick={toggleVisibleMenu}><HashLink to="/#about">О компании</HashLink></li>
                        </ul>

                        <div className="header-info">
                            <p className="time-work">ПН-СБ: 8:00 - 22:00</p>
                            <a className="tel-number" href='tel:89067003888'>8 (906) 700-38-88</a>
                        </div>
                    </div>
                    <div className="burger" onClick={toggleVisibleMenu}>
                        <div id="nav-icon3" className={visibleMenu ? 'open' : undefined}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header