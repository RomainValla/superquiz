import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div className="code-navbar">
                <div className="code-navbar__content">
                    <div className="code-navbar__logo-wrapper">
                        <Link to="/" className=" code-link code-navbar__logo">/CodeQuiz.</Link>                    
                    </div>
                    <div className="code-navbar__item-list">
                        <Link to="https://www.twitter.com/romainvlla" className="code-link code-navbar__item">@romainvalla</Link>                       
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header