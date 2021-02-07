//Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Styles
import './App.scss';
//Pages
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import NoMatch from './pages/404';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify("dark"));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if(!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark").matches;
  }






  return (
    <Router>
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          <Header />
          <button  onClick={() => setDarkMode(prevMode => !prevMode)}   className="code-button code-button__theme">

                <svg width="151" height="150" viewBox="0 0 151 150" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M150.087 81.6384C148.776 95.8234 143.452 109.342 134.739 120.612C126.025 131.881 114.283 140.437 100.884 145.276C87.4861 150.116 72.9867 151.039 59.0827 147.939C45.1786 144.839 32.4451 137.843 22.372 127.77C12.299 117.697 5.30299 104.963 2.20272 91.0592C-0.897546 77.1552 0.0261245 62.6557 4.86566 49.2575C9.70519 35.8593 18.2604 24.1164 29.5303 15.403C40.8001 6.68953 54.3185 1.36591 68.5035 0.0550308C60.1986 11.2906 56.2022 25.1338 57.2413 39.0668C58.2803 52.9999 64.2857 66.0972 74.1652 75.9767C84.0447 85.8562 97.142 91.8616 111.075 92.9006C125.008 93.9396 138.851 89.9433 150.087 81.6384V81.6384Z"/>
                </svg>          
                  {/* <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0)">
                          <path d="M12.8812 17.028C15.6427 17.028 17.8812 14.7894 17.8812 12.028C17.8812 9.26653 15.6427 7.02795 12.8812 7.02795C10.1198 7.02795 7.88123 9.26653 7.88123 12.028C7.88123 14.7894 10.1198 17.028 12.8812 17.028Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M12.8812 1.02795V3.02795" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M12.8812 21.028V23.028" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M5.10123 4.24792L6.52123 5.66792" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M19.2412 18.3879L20.6612 19.8079" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M1.88123 12.028H3.88123" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M21.8812 12.028H23.8812" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M5.10123 19.8079L6.52123 18.3879" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M19.2412 5.66792L20.6612 4.24792" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                          <clipPath id="clip0">
                              <rect width="24" height="24" fill="white" transform="translate(0.881233 0.0279541)"/>
                          </clipPath>
                      </defs>
                    </svg> */}
            </button>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/quiz" component={Quiz}/>
              <Route path="*" component={NoMatch}/>
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;