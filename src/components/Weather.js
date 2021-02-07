import React, { useState } from 'react';

const api = {
    key: "29afdd40218dba611d57a6d948c790d6",
    base: "https://api.openweathermap.org/data/2.5/"
  }

const Weather = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
              console.log(result);
            });
        }
      }
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }   
 

    return (
        <div className="code-main__weather-content">
           <div className="code-main__weather-img">
                <svg width="625" height="625" viewBox="0 0 625 625" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M112.33 96.53H512.677C521.402 96.53 528.475 103.603 528.475 112.327V512.675C528.475 521.399 521.402 528.472 512.677 528.472H112.33C103.606 528.472 96.5328 521.399 96.5328 512.675V112.327C96.5328 103.603 103.606 96.53 112.33 96.53Z" fill="#F25042" stroke="black" stroke-width="10"/>
                    <path d="M18.2414 301.33L301.33 18.2414C307.499 12.0722 317.501 12.0721 323.67 18.2414L606.759 301.33C612.928 307.499 612.928 317.501 606.759 323.67L323.67 606.759C317.501 612.928 307.499 612.928 301.33 606.759L18.2414 323.67C12.0722 317.501 12.0722 307.499 18.2414 301.33Z" fill="#F25042" stroke="black" stroke-width="10"/>
                    <path d="M63.2495 155.697L449.955 52.0798C458.383 49.8217 467.045 54.8228 469.303 63.2501L572.92 449.956C575.179 458.383 570.177 467.045 561.75 469.304L175.044 572.921C166.617 575.179 157.955 570.178 155.697 561.751L52.0792 175.045C49.8211 166.618 54.8222 157.955 63.2495 155.697Z" fill="#F25042" stroke="black" stroke-width="10"/>
                    <path d="M31.1624 225.553L377.873 25.3794C385.429 21.0171 395.091 23.6059 399.453 31.1616L599.626 377.873C603.989 385.428 601.4 395.09 593.844 399.452L247.133 599.626C239.578 603.988 229.916 601.399 225.554 593.843L25.3802 247.133C21.018 239.577 23.6067 229.915 31.1624 225.553Z" fill="#F25042" stroke="black" stroke-width="10"/>
                    <path d="M25.3802 377.871L225.554 31.1597C229.916 23.604 239.578 21.0152 247.133 25.3775L593.844 225.551C601.4 229.913 603.989 239.575 599.626 247.131L399.453 593.842C395.091 601.397 385.429 603.986 377.873 599.624L31.1624 399.45C23.6067 395.088 21.018 385.426 25.3802 377.871Z" fill="#F25042" stroke="black" stroke-width="10"/>
                    <path d="M52.0792 449.957L155.697 63.2514C157.955 54.8241 166.617 49.823 175.044 52.081L561.75 155.699C570.177 157.957 575.179 166.619 572.92 175.046L469.303 561.752C467.045 570.179 458.383 575.18 449.955 572.922L63.2495 469.305C54.8222 467.047 49.8211 458.384 52.0792 449.957Z" fill="#F25042" stroke="black" stroke-width="10"/>
                    <path d="M100.02 120.02C100.02 108.975 108.975 100.02 120.02 100.02H505.02C516.066 100.02 525.02 108.975 525.02 120.02V505.02C525.02 516.066 516.066 525.02 505.02 525.02H120.02C108.975 525.02 100.02 516.066 100.02 505.02V120.02Z" fill="#F25042"/>
                    <path d="M26.1421 326.663C18.3316 318.852 18.3317 306.189 26.1421 298.378L298.378 26.1421C306.189 18.3317 318.852 18.3317 326.663 26.1421L598.899 298.378C606.709 306.189 606.709 318.852 598.899 326.663L326.663 598.899C318.852 606.709 306.189 606.709 298.378 598.899L26.1421 326.663Z" fill="#F25042"/>
                    <path d="M57.4385 181.579C54.5796 170.909 60.9113 159.943 71.5806 157.084L443.462 57.4385C454.131 54.5797 465.098 60.9114 467.957 71.5807L567.602 443.462C570.461 454.131 564.129 465.098 553.46 467.957L181.579 567.602C170.909 570.461 159.943 564.13 157.084 553.46L57.4385 181.579Z" fill="#F25042"/>
                    <path d="M32.24 252.06C26.7171 242.495 29.9946 230.263 39.5605 224.74L372.98 32.24C382.546 26.7171 394.778 29.9946 400.301 39.5605L592.801 372.98C598.324 382.546 595.046 394.778 585.48 400.301L252.06 592.801C242.495 598.324 230.263 595.046 224.74 585.48L32.24 252.06Z" fill="#F25042"/>
                    <path d="M39.5605 400.301C29.9946 394.778 26.7171 382.546 32.24 372.98L224.74 39.5605C230.263 29.9946 242.495 26.7171 252.06 32.24L585.48 224.74C595.046 230.263 598.324 242.495 592.801 252.06L400.301 585.48C394.778 595.046 382.546 598.324 372.98 592.801L39.5605 400.301Z" fill="#F25042"/>
                    <path d="M71.5806 467.957C60.9113 465.098 54.5796 454.131 57.4385 443.462L157.084 71.5806C159.943 60.9112 170.909 54.5796 181.579 57.4384L553.46 157.084C564.129 159.943 570.461 170.909 567.602 181.579L467.957 553.46C465.098 564.129 454.131 570.461 443.462 567.602L71.5806 467.957Z" fill="#F25042"/>
                    <circle cx="313" cy="312" r="195" fill="#8C7851" stroke="black" stroke-width="10"/>
                    <path d="M283 283C283 263.67 298.67 248 318 248C337.33 248 353 263.67 353 283" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M184 283C184 263.67 199.67 248 219 248C238.33 248 254 263.67 254 283" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M305 326C305 345.33 289.33 361 270 361C250.67 361 235 345.33 235 326" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
           </div>
           <div className="code-main__weather-text">
                <div className="code-main__weather-response">
                {(typeof weather.main != "undefined") ? (
                    <div className="code-weather__content">
                        <div className="code-weather__location-content">
                            <div className="location">
                                <p>{weather.name}, {weather.sys.country}</p>
                            </div>
                            <div className="date">
                                <p>{dateBuilder(new Date())}</p>
                            </div>
                        </div>
                        <div className="code-weather__temperature-content">
                            <div className="code-temperature">
                                <p>{Math.round(weather.main.temp)}°c</p>
                            </div>
                            <div className="code-weather">
                                <p>{weather.weather[0].main}</p>
                            </div>
                        </div>
                    </div>
                ) : ('')}
                </div>
                <div className="code-main__weather-form">
                    <input type="text" placeholder="Enter City" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
                    <button type="submit" className="code-button code-button--medium">Get Weather</button>
                </div>
           </div>
       </div>
    )
}
export default Weather