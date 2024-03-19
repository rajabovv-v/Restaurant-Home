import MenuIcon from '../assets/icons/MenuIcon'
import '../assets/style/style.css'


function Header() {
    return (
        <div className="header">
            <header className="header">
                <div className="container">
                    <div className="header-row">
                        <div className="header-logo">
                            <a href="#" className="header-logo_h1">GERICHT</a>
                        </div>
                        <div className="header-nav">
                            <a href="#" className="header-link">Home</a>
                            <a href="#" className="header-link">Pages</a>
                            <a href="#" className="header-link">Contact Us</a>
                            <a href="#" className="header-link">Blog</a>
                            <a href="#" className="header-link">Landing</a>
                        </div>
                        <div className="header-email">
                            <a href="#" className="header-email-login">Log in / registration</a>
                            <a href="#" className="header-email-login1">Book Table</a>
                        </div>
                        <div className="header-menu">
                           <MenuIcon/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header