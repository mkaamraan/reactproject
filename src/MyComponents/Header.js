import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../Images/1.jpg"
import img2 from "../Images/2.jpg"
import img3 from "../Images/3.jpg"
import img4 from "../Images/4.png"
import img5 from "../Images/5.jpg"
import img6 from "../Images/6.jpg"
import img7 from "../Images/7.png"
import img7a from "../Images/7a.jpg"
import img8 from "../Images/8.png"
import img9 from "../Images/9.png"
import logo from "../Images/logo.png"
import TIC from "../Images/TIC.png"
import OLAEBAN from "../Images/OLAEBAN.jpg"
import CINTAP from "../Images/CINTAP.jpg"
import Branding from "../Images/SIGMAX.png"
import DMedia from "../Images/SIGMAX1.png"
import WDevelopment from "../Images/SIGMAX2.png"
import IMarketing from "../Images/SIGMAX3.png"
import SMMarketing from "../Images/SIGMAX4.png"
import { Arrow } from 'react-awesome-shapes'
import { useRef } from "react";
import Xarrow from "react-xarrows";
import Poly from 'react-svg-polygon'
import { Polygon } from 'react-svg-path'
import Path from 'react-svg-path'
import './Header.css';

export default function Header(props) {
  return (
    <div style={{ margin: '100px' }}>


      <h1 align={"center"} style={{ color: '#677ff3' }}>BRINGING OUT THE BEST</h1>


      <table align={"center"} width={'800'}>

        <tr>

          <th width={200}>

            <img src={logo} alt="logo image not loading" width={200} height={180} />
            <p></p>
            <p style={{ color: '#6880f3' }}> <b>SIGMAX MARKETING</b> </p>

          </th>

          <th>

            <hr style={{ height: '3px', background: '#777777', marginTop: '135px' }} />

          </th>

        </tr>

      </table>

      <table align={"center"} width={'800'}>

        <tr>

          <th width={10}>

            <p align={"right"} style={{ writingMode: 'vertical-rl', color: '#90a2f6', marginTop: '-10px' }}>SCROLL </p>
            <div class="arrow-1" marginTop={'2px'}></div>

          </th>

          <th>

            <h3 style={{ color: '#707bfb' }}> BUILDING </h3>
            <h4 style={{ color: '#ab52c5' }}>THE BRAND</h4>
            <h5 style={{ color: '#707bfb' }}>FOR YOUR BUSINESS</h5>
            <p style={{ color: '#252525' }}>THAT RESONATES WITH OUR VALUES</p>

          </th>

          <th>

            <img src={img1} alt="error image loading" width={300} height={200} align={"right"} />

          </th>

        </tr>

      </table>

      <hr style={{ height: '3px', background: '#777777' }} />

      <h5 align={"center"} style={{ color: '#a8affc' }}>SHOWCASE YOUR BRAND TO YOUR <br /> CUSTOMERS</h5>
      <p align={"center"}>We communicate your company's brand value to the customers throught right position, digital makeover and establishing networks across various marketing channels</p>
      <h4 align={"center"} style={{ color: '#677ff3' }}>OUR SERVICES</h4>

      <table align={"center"}>

        <tr>

          <th align={"center"}>
            <img src={Branding} alt="logo image not loading" width={90} height={60} />
          </th>

          <th style={{ color: '#ff8622' }} >+</th>

          <th align={"center"}>
            <img src={DMedia} alt="logo image not loading" width={90} height={60} />
          </th>

          <th style={{ color: '#ff8622' }}>+</th>

          <th align={"center"}>
            <img src={WDevelopment} alt="logo image not loading" width={90} height={60} />
          </th>

          <th style={{ color: '#ff8622' }}>+</th>

          <th align={"center"}>
            <img src={IMarketing} alt="logo image not loading" width={90} height={60} />
          </th>

          <th style={{ color: '#ff8622' }}>+</th>

          <th align={"center"}>
            <img src={SMMarketing} alt="logo image not loading" width={90} height={60} />
          </th>

        </tr>

        <tr>

          <th style={{ color: '#b9befd' }}><p align={"center"}>BRANDING</p></th>
          <th></th>
          <th style={{ color: '#b9befd' }}><p align={"center"}>DIGITAL <br /> MEDIA</p></th>
          <th></th>
          <th style={{ color: '#b9befd' }}><p align={"center"}>WEBSITE <br /> DEVELOPMENT</p></th>
          <th></th>
          <th style={{ color: '#b9befd' }}><p align={"center"}>INTERNET <br /> MARKETING</p></th>
          <th></th>
          <th style={{ color: '#b9befd' }}><p align={"center"}>SOCIAL MEDIA <br /> MARKETING</p></th>

        </tr>

      </table>





      <div align={"center"}>
        <span style={{ border: '3px solid #758bf4', fontSize: '30px', color: '#9ca3fc' }} align={"center"}> <b>Schedule a Consultation</b> </span>
      </div>


      <table align={"center"} width={800} height={250}>
        <tr>
          <th>
            <img src={img2} alt="error image loading" width={300} height={200} align={"left"} />
          </th>

          <th>
            <p align={"right"} style={{ transform: 'rotate(270deg)', color: '#252525' }} > BRANDING SERVICES  </p>
          </th>

          <th>
            <h3 align={"right"} style={{ color: '#707bfb' }}> DEFINE </h3>
            <h4 align={"right"} style={{ color: '#ab52c5' }}>WHAT MAKES YOU</h4>
            <h5 align={"right"} style={{ color: '#707bfb' }}>UNIQUE</h5>
            <p align={"right"} style={{ color: '#252525' }}>AND CREATE A RUSTED BRAND</p>
          </th>

          <th>
            <p align={"right"} style={{ writingMode: 'vertical-rl', color: '#90a2f6', marginTop: '-10px' }}>SCROLL </p>
            <div class="arrow-1" marginTop={'2px'}></div>
          </th>

        </tr>

      </table>

      <hr style={{ height: '3px', background: '#777777' }} />

      <div align={"right"}>
        <span style={{ border: '3px solid #abb8f8', color: '#abb1fc' }} align={"right"}>
          Learn More
        </span>
      </div>


      <table align={"center"} width={800} height={230}>

        <tr>

          <th>
            <p align={"right"} style={{ writingMode: 'vertical-rl', color: '#90a2f6', marginTop: '-10px' }}>SCROLL </p>
            <div class="arrow-1" marginTop={'2px'}></div>
          </th>

          <th>
            <h3 align={"left"} style={{ color: '#707bfb' }}> ENERGIZE </h3>
            <h4 align={"left"} style={{ color: '#ab52c5' }}>THROUGH YOUR</h4>
            <h5 align={"left"} style={{ color: '#ab52c5' }}>CREATIVE LENSES</h5>
            <p align={"left"} style={{ color: '#252525' }}>THE POWER OF CONTENT AND <br /> WHY YOUR BUSINESS NEES IT</p>
          </th>

          <th>
            <p align={"right"} style={{ transform: 'rotate(270deg)', color: '#252525' }} > DIGITAL MEDIA  </p>
          </th>

          <th>
            <img src={img3} alt="error image loading" width={300} height={200} align={"right"} />
          </th>

        </tr>

      </table>
      <hr />
      <div align={"left"}>
        <span style={{ border: '3px solid #abb8f8', color: '#abb1fc' }} align={"right"}>
          Learn More
        </span>
      </div>


      <table align={"center"} width={800} height={230}>

        <tr>

          <th>
            <img src={img4} alt="error image loading" width={300} height={200} align={"left"} />

          </th>

          <th>
            <p align={"right"} style={{ transform: 'rotate(270deg)', color: '#252525' }} > WEBSITE DEVELOPMENT  </p>
          </th>

          <th>
            <h3 align={"right"} style={{ color: '#707bfb' }}> DEFINE </h3>
            <h4 align={"right"} style={{ color: '#ab52c5' }}>WHAT MAKES YOU</h4>
            <h5 align={"right"} style={{ color: '#707bfb' }}>UNIQUE</h5>
            <p align={"right"} style={{ color: '#252525' }}>AND CREATE A RUSTED BRAND</p>
          </th>

          <th>
            <p align={"right"} style={{ writingMode: 'vertical-rl', color: '#90a2f6', marginTop: '-10px' }}>SCROLL </p>
            <div class="arrow-1" marginTop={'2px'}></div>
          </th>

        </tr>

      </table>
      <hr />
      <div align={"right"}>
        <span style={{ border: '3px solid #abb8f8', color: '#abb1fc' }} align={"right"}>
          Learn More
        </span>
      </div>

      <table align={"center"} width={800} height={230}>

        <tr>

          <th>
            <p align={"right"} style={{ writingMode: 'vertical-rl', color: '#90a2f6', marginTop: '-10px' }}>SCROLL </p>
            <div class="arrow-1" marginTop={'2px'}></div>
          </th>

          <th>
            <h3 align={"left"} style={{ color: '#707bfb' }}> ENERGIZE </h3>
            <h4 align={"left"} style={{ color: '#ab52c5' }}>THROUGH YOUR</h4>
            <h5 align={"left"} style={{ color: '#ab52c5' }}>CREATIVE LENSES</h5>
            <p align={"left"} style={{ color: '#252525' }}>THE POWER OF CONTENT AND <br /> WHY YOUR BUSINESS NEES IT</p>
          </th>

          <th>
            <p align={"right"} style={{ transform: 'rotate(270deg)' }} > INTERNET MARKETING  </p>
          </th>

          <th>
            <img src={img5} alt="error image loading" width={300} height={200} align={"right"} />
          </th>

        </tr>

      </table>
      <hr />
      <div align={"left"}>
        <span style={{ border: '3px solid #abb8f8', color: '#abb1fc' }} align={"right"}>
          Learn More
        </span>
      </div>

      <table align={"center"} width={800} height={230}>

        <tr>

          <th>
            <img src={img6} alt="error image loading" width={300} height={200} align={"left"} />

          </th>

          <th>
            <p align={"center"} style={{ transform: 'rotate(270deg)' }} > SOCIAL MEDIA <br /> MARKETING  </p>
          </th>

          <th>
            <h3 align={"right"} style={{ color: '#707bfb' }}> DEFINE </h3>
            <h4 align={"right"} style={{ color: '#ab52c5' }}>WHAT MAKES YOU</h4>
            <h5 align={"right"} style={{ color: '#707bfb' }}>UNIQUE</h5>
            <p align={"right"} style={{ color: '#252525' }}>AND CREATE A RUSTED BRAND</p>
          </th>

          <th>
            <p align={"right"} style={{ writingMode: 'vertical-rl', color: '#90a2f6', marginTop: '-10px' }}>SCROLL </p>
            <div class="arrow-1" marginTop={'2px'}></div>
          </th>

        </tr>

      </table>
      <hr />
      <div align={"right"}>
        <span style={{ border: '3px solid #abb8f8', color: '#abb1fc' }} align={"right"}>
          Learn More
        </span>
      </div>

      <table align={"center"} width={'800'}>

        <tr>

          <th width={'400'}>
            <b style={{ fontSize: '30px' }}>OUR IDEAS</b>
          </th>

          <th width={'400'}>
            <p align={"right"}>READ OUR BLOG------> </p>
          </th>

        </tr>

      </table>

      <hr style={{ height: '3px', background: '#777777' }} />

      <table align={'center'} width={'1050px'}>

        <tr>

          <th width={'350px'}>
            <img src={img7a} alt="error image loading" width={250} height={200} />
          </th>

          <th width={'350px'}>
            <img src={img8} alt="error image loading" width={250} height={200} />
          </th>

          <th width={'350px'}>
            <img src={img9} alt="error image loading" width={250} height={200} />
          </th>

        </tr>

        <tr >

          <th >
            <p style={{ width: '250px', marginTop: 0 }}>5 Reasons Website Development is a must </p>
          </th>

          <th>
            <p style={{ width: '250px' }}>Website Information Architecture: 4 things you need to know</p>
          </th>

          <th>
            <p style={{ width: '250px' }}>Should you use Competitor research tools</p>
          </th>

        </tr>

        <tr>

          <th >
            <p>29th March' 22</p>
            <hr style={{ border: '2px solid #A020F0', width: '250px' }} />
          </th>

          <th>
            <p>20th March' 22</p>
            <hr style={{ border: '2px solid #A020F0', width: '250px' }} />
          </th>

          <th>
            <p>13th March' 22</p>
            <hr style={{ border: '2px solid #A020F0', width: '250px' }} />
          </th>
        
        </tr>

        <tr>

          <th >
            <p style={{ width: '250px' }}>Website maintenance is like a check-up, an oil change or a teeth cleaning. If you aren't doint it regularly, things can go downhill fast. You don't designa and develop a website and then you're all done. you need to maintain your website if you want it to have any success...</p>
            <p>Read More</p>
          </th>

          <th>
            <p style={{ width: '250px' }}>Are you wondering what website information architecture (IA) is all about? It's the practice of structuring, organizing, labeling, and presenting content to make it easy to find, understand, and use. Web users look for primary elements in a website. They want a clear presentation of what the company offers. Contact details, phone...</p>
            <p>Read More</p>
          </th>

          <th>
            <p style={{ width: '250px' }}>Do you have any competitors that do SEO better than you do? Maybe you have a better product than your competitors, but they doa better job of promoting their products throught organic search. If that's the case, you may want to look into competiror research tools. These tools can...</p>
            <p>Read More</p>
          </th>

        </tr>


      </table>

      <h3>OUR CLIENTS</h3>
      <img src={TIC} alt="error image loading" width={250} height={200} /><span>   </span>
      <img src={OLAEBAN} alt="error image loading" width={250} height={200} /><span>   </span>
      <img src={CINTAP} alt="error image loading" width={250} height={200} />
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <p align={'center'}>SHOWCASE YOUR BRAND TO YOUR CUSTOMERS</p>

        <table align={"center"}>
          <tr align={"center"}>

            <th width={200}>
              <img src={logo} alt="logo image not loading" width={100} height={90} />
              <p>SIGMAX MARKETING</p>
            </th>

            <th align={"center"}>
              <img src={Branding} alt="logo image not loading" width={90} height={60} />
              <p>BRANDING</p>
            </th>

            <th>+</th>

            <th align={"center"}>
              <img src={DMedia} alt="logo image not loading" width={90} height={60} />
              <p>DIGITAL <br /> MEDIA</p>
            </th>

            <th>+</th>


            <th align={"center"}>
              <img src={WDevelopment} alt="logo image not loading" width={90} height={60} />
              <p>WEBSITE <br /> DEVELOPMENT</p>
            </th>

            <th>+</th>


            <th align={"center"}>
              <img src={IMarketing} alt="logo image not loading" width={90} height={60} />
              <p>INTERNET <br /> MARKETING</p>
            </th>

            <th>+</th>


            <th align={"center"}>
              <img src={SMMarketing} alt="logo image not loading" width={90} height={60} />
              <p>SOCIAL MEDIA <br /> MARKETING</p>
            </th>
          </tr>


        </table>
        <hr style={{ border: '5px solid white' }} />
        <div>
          <span align={'left'}>Flat no 203, Ibrahim Apartments, Dhaurrah</span>
          <span align={'center'}>copyright SIGMAX MARKETING</span>
          <span align={'right'}>+91-9456605829  sohaib@sigmaxmarketing.com</span>
        </div>
      </div>



    </div>
  )
}


Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired


}