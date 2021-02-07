const Footer = () => {
    return(
        <footer>
            <div className="code-footer">
                <div className="code-footer__content">
                    <div className="code-footer__text">
                        <h3>Who's behind Code Quiz?</h3>
                        <p>Hi there 👋. My name is Romain Valla, I'm the maker of Code Quiz.<br/> This is actually a school projet and my first time using ReactJs.<br/> The goal is to make a little quiz with multiple categories and a certain amount of questions.</p>
                    </div>
                    <div className="code-footer__item-list">
                        <a href="https://www.twitter.com/romainvlla" className="super-link super-footer__item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter super-icon"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                        <a href="mailto:romainvalla@icloud.com" class="super-link super-footer__item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign super-icon"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer