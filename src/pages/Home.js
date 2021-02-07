import React from 'react';
import { Link } from 'react-router-dom';
import Weather from "../components/Weather";

function Home() {
    return (
        <div className="code-main">
            <div className="code-main__content">
                <div className="code-main__hero">
                    <div className="code-main__hero-content">
                        <div className="code-main__hero-title">
                            <h1>Start learning Code by challenging yourself!</h1>
                        </div>
                        <div className="code-main__hero-text">
                            <p>codequiz offer  multiple selection of quiz to exerce yourself at coding.</p>
                        </div>
                        <div className="code-main__hero-cta">
                            <button className="code-button code-button--medium">
                                <Link to="/quiz" className="code-link">Get Started</Link>  
                            </button>
                        </div>
                    </div>
                    <div className="code-main__hero-img">
                        <svg width="529" height="392" viewBox="0 0 529 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="74.5" y="2.5" width="451" height="350" rx="7.5" fill="#EADDCF" stroke="#020826" stroke-width="5"/>
                            <line x1="72" y1="47.5" x2="528.018" y2="47.5" stroke="black" stroke-width="5"/>
                            <circle cx="102" cy="25" r="7.5" fill="white" stroke="#020826" stroke-width="5"/>
                            <circle cx="132" cy="25" r="7.5" fill="white" stroke="#020826" stroke-width="5"/>
                            <circle cx="162" cy="25" r="7.5" fill="white" stroke="#020826" stroke-width="5"/>
                            <path d="M23 113H413C418.523 113 423 117.477 423 123V355H23V113Z" fill="black" fill-opacity="0.15"/>
                            <rect x="2.5" y="94.5" width="395" height="295" rx="7.5" fill="white" stroke="#020826" stroke-width="5"/>
                            <line x1="49.0129" y1="389.501" x2="49.0129" y2="94.4991" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            <mask id="path-9-inside-1" fill="white">
                            <rect x="64" y="126" width="270" height="20" rx="2"/>
                            </mask>
                            <rect x="64" y="126" width="270" height="20" rx="2" stroke="black" stroke-width="10" mask="url(#path-9-inside-1)"/>
                            <mask id="path-10-inside-2" fill="white">
                            <rect x="91" y="158" width="132" height="20" rx="2"/>
                            </mask>
                            <rect x="91" y="158" width="132" height="20" rx="2" stroke="black" stroke-width="10" mask="url(#path-10-inside-2)"/>
                            <mask id="path-11-inside-3" fill="white">
                            <rect x="234" y="158" width="47" height="20" rx="2"/>
                            </mask>
                            <rect x="234" y="158" width="47" height="20" rx="2" stroke="black" stroke-width="10" mask="url(#path-11-inside-3)"/>
                            <mask id="path-12-inside-4" fill="white">
                            <rect x="64" y="186" width="256" height="20" rx="2"/>
                            </mask>
                            <rect x="64" y="186" width="256" height="20" rx="2" stroke="black" stroke-width="10" mask="url(#path-12-inside-4)"/>
                            <mask id="path-13-inside-5" fill="white">
                            <rect x="64" y="214" width="84" height="20" rx="2"/>
                            </mask>
                            <rect x="64" y="214" width="84" height="20" rx="2" stroke="black" stroke-width="10" mask="url(#path-13-inside-5)"/>
                            <mask id="path-14-inside-6" fill="white">
                            <rect x="157" y="214" width="84" height="20" rx="2"/>
                            </mask>
                            <rect x="157" y="214" width="84" height="20" rx="2" stroke="black" stroke-width="10" mask="url(#path-14-inside-6)"/>
                            <mask id="path-15-inside-7" fill="white">
                            <rect x="250" y="214" width="84" height="20" rx="2"/>
                            </mask>
                            <rect x="250" y="214" width="84" height="20" rx="2" stroke="black" stroke-width="10" mask="url(#path-15-inside-7)"/>
                            <mask id="path-16-inside-8" fill="white">
                            <rect x="65" y="242" width="216" height="20" rx="2"/>
                            </mask>
                            <rect x="65" y="242" width="216" height="20" rx="2" stroke="black" stroke-width="10" mask="url(#path-16-inside-8)"/>
                        </svg>
                    </div>
                </div>
                <div className="code-main__categories">
                    <div className="code-main__categories-headline">
                        <h2>Quiz categories</h2>
                        <p>Let's see which category you would like to exerce yourself <br/>through a litlle quiz.</p>
                    </div>
                    <div className="code-main__categories-content">
                        <div className="code-main__card">
                            <h3>HTML</h3>
                            <p>HTML is the standard markup language for Web pages.<br/>With HTML you can create your own Website.</p>
                        </div>
                        <div className="code-main__card">
                            <h3>CSS</h3>
                            <p>CSS is the language we use to style an HTML document.<br/>CSS describes how HTML elements should be displayed.</p>
                        </div>
                        <div className="code-main__card">
                            <h3>PHP</h3>
                            <p>PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.</p>
                        </div>
                        <div className="code-main__card">
                            <h3>JAVASCRIPT</h3>
                            <p>JavaScript is the world's most popular programming language.<br/>JavaScript is the programming language of the Web.</p>
                        </div>
                    </div>
                    <div className="code-main__categories-cta">
                        <button className="code-button code-button--medium">
                            <Link to="/quiz" className="code-link">Get Started</Link>  
                        </button>
                    </div>
                </div>
                <div className="code-main__weather">
                    <Weather />
                </div>
            </div>
        </div>
    )
}

export default Home;