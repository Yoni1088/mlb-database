import React from 'react'
import "./CurrentFranchise.css"
import Title from './Title'
import { Link } from "react-router-dom";


export default function CurrentFranchise() {
  return (
    <div>
         <Title/>
        <h1 id="fh1">Current Franchise</h1>
        <ul id='L1'>
            <li>
              <a href="https://www.mlb.com/dbacks" target="_blank">
                <img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/109.svg" alt="AD"/>
              </a>
              <Link className='link' to='/cf-ad'>Arizona Diamondbacks</Link>
            </li>
            <li>
              <a href="https://www.mlb.com/braves" target="_blank">
                <img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/144.svg" alt="AB"/>
                </a>
                <Link className='link' to='/cf-ab'>Atlanta Braves</Link>
              </li>
            <li>
              <a href="https://www.mlb.com/orioles" target="_blank">
                <img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/110.svg" alt="BO"/>
                </a>
                <Link className='link' to='/cf-bo'>Baltimore Orioles</Link>
                </li>
            <li>
              <a href="https://www.mlb.com/redsox" target="_blank">
                <img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/111.svg" alt="BRS"/>
                </a>
                <Link className='link' to='/cf-brs'>Boston Red Sox</Link>
                </li>
            <li>
              <a href="https://www.mlb.com/cubs" target="_blank">
                <img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/112.svg" alt="CC"/>
                </a>
                <Link className='link' to='/cf-cc'>Chicago Cubs</Link>
                </li>
            <li>
              <a href="https://www.mlb.com/whitesox" target="_blank">
                <img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/145.svg" alt="CWS"/>
                </a>
                <Link className='link' to='/cf-cws'>Chicago Whtie Sox</Link>
                </li>
            <li>
              <a href="https://www.mlb.com/reds" target="_blank">
                <img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/113.svg" alt="CS"/>
                </a>
                <Link className='link' to='/cf-cr'>Cincinnati Reds</Link>
                </li>
            <li><a href="https://www.mlb.com/guardians" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/114.svg" alt="CG"/></a>Cleveland Guardians</li>
            <li><a href="https://www.mlb.com/rockies" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/115.svg" alt="CR"/></a>Colorado Rockies</li>
            <li><a href="https://www.mlb.com/tigers" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/116.svg" alt="DT"/></a>Detroit Tigers</li>
            <li><a href="https://www.mlb.com/astros" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-primary-on-light/117.svg" alt="HA"/></a>Houston Astros</li>
            <li><a href="https://www.mlb.com/royals" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/118.svg" alt="KCR"/></a>Kansas City Royals</li>
            <li><a href="https://www.mlb.com/angels" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/108.svg" alt="LAA"/></a>Los Angeles Angels</li>
            <li><a href="https://www.mlb.com/dodgers" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/119.svg" alt="LAD"/></a>Los Angeles Dodgers</li>
            <li><a href="https://www.mlb.com/marlins" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/146.svg" alt="MM"/></a>Miami Marlins</li>
            <li><a href="https://www.mlb.com/brewers" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/158.svg" alt="MB"/></a>Milwaukee Brewers</li>
            <li><a href="https://www.mlb.com/twins" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/142.svg" alt="MT"/></a>Minnesota Twins</li>
            <li><a href="https://www.mlb.com/mets" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/121.svg" alt="NYM"/></a>New York Mets</li>
            <li><a href="https://www.mlb.com/yankees" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/147.svg" alt="NYY"/></a>New York Yankees</li>
            <li><a href="https://www.mlb.com/athletics" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/133.svg" alt="OA"/></a>Oakland Athletics</li>
            <li><a href="https://www.mlb.com/phillies" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/143.svg" alt="PP"/></a>Philadelphia Phillies</li>
            <li><a href="https://www.mlb.com/pirates" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/134.svg" alt="PP"/></a>Pittsburgh Pirates</li>
            <li><a href="https://www.mlb.com/padres" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/135.svg" alt="SDP"/></a>San Diego Padres</li>
            <li><a href="https://www.mlb.com/giants" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/137.svg" alt="SFG"/></a>San Francisco Giants</li>
            <li><a href="https://www.mlb.com/mariners" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-primary-on-light/136.svg" alt="SM"/></a>Seattle Mariners</li>
            <li><a href="https://www.mlb.com/cardinals" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/138.svg" alt="SLC"/></a>St.Louis Cardinals</li>
            <li><a href="https://www.mlb.com/rays" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/139.svg" alt="TBR"/></a>Tampa Bay Rays</li>
            <li><a href="https://www.mlb.com/rangers" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/140.svg" alt="TR"/></a>Texas Rangers</li>
            <li><a href="https://www.mlb.com/bluejays" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/141.svg" alt="TBJ"/></a>Toronto Blue Jays</li>
            <li><a href="https://www.mlb.com/nationals" target="_blank"><img src="https://www.mlbstatic.com/team-logos/team-cap-on-light/120.svg" alt="WN"/></a>Washington Nationals</li>
        </ul>
    </div>
  )
}
