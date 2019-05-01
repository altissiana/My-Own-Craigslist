import React, { Component } from 'react'
import Calendar from 'react-calendar'



class LeftBar extends Component {
    render() {
        return (
            <div className="leftbar">
                <a href="https://www.google.com/moon/" id="logo">tissislist</a>
                <h3 className="post">create a posting</h3>
                <p className="text">my account</p>
                <br />
                <input type="text" className="search" placeholder="search tissislist"></input>
                <br /><br /><br />
                <Calendar />
                <br />
                <ul>
                    <li><a href="" className="text">help, faq, abuse, legal</a></li>
                    <li><a href="" className="text">avoid scams and fraud</a></li>
                    <li><a href="" className="text">personal safety tips</a></li>
                    <li><a href="" className="text">terms of use</a></li>
                    <li><a href="" className="text">privacy policy</a></li>
                    <li><a href="" className="text">system status</a></li>
                </ul>
                <br />
                <ul>
                    <li><a href="" className="text">about tissislist</a></li>
                    <li><a href="" className="text">tissislist is hiring in sf</a></li>
                    <li><a href="" className="text">tissislist open source</a></li>
                    <li><a href="" className="text">tissislist blog</a></li>
                    <li><a href="" className="text">best-of-tissislist</a></li>
                    <li><a href="" className="text">tissislist anti-TV</a></li>
                    <li><a href="" className="text">"tissislist joe"</a></li>
                    <li><a href="" className="text">tissi connects</a></li>
                    <li><a href="" className="text">progressive directory</a></li>
                </ul>
                <a href="https://forecast.weather.gov/MapClick.php?zoneid=CAZ006" className="text">weather</a>
                <br />
                <a href="https://earthquake.usgs.gov/earthquakes/map/" className="text">quake</a>
                <br />
                <a href="https://tidesandcurrents.noaa.gov/waterlevels.html?id=9414290" className="text">tide</a>

            </div >
        )
    }
}

export default LeftBar