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

export default function Header(props) {
  return (
    <div style={{ margin: '100px' }}>



      <h1 align={"center"} >BRINGING OUT THE BEST</h1>
      <img src={logo} alt="logo image not loading" width={200} height={180} />
      <p> <b>SIGMAX MARKETING</b> </p>
      <div align='right'>
        <hr style={{
          // borderColor: 'black',
          width: '90%',
          height: '3px',
          //broder: '2px',
          background: 'black',
        }} />
      </div>

      <table align={"center"} width={'800'}>

        <tr>

          <th width={10}>
            <p align={"right"} style={{ writingMode: 'vertical-rl' }}> SCROLL------> </p>
          </th>

          <th>
            <h3> BUILDING </h3>
            <h4>THE BRAND</h4>
            <h5>FOR YOUR BUSINESS</h5>
            <p>THAT RESONATES WITH OUR VALUES</p>
          </th>

          <th>
            <img src={img1} alt="error image loading" width={300} height={200} align={"right"} />
          </th>

        </tr>

      </table>


      <h5 align={"center"}>SHOWCASE YOUR BRAND TO YOUR <br /> CUSTOMERS</h5>
      <p align={"center"}>We communicate your company's brand value to the customers throught right position, digital makeover and establishing networks across various marketing channels</p>
      <h4 align={"center"}>OUR SERVICES</h4>
      <p align={"center"}>BRANDING + DIGITAL MEDIA + WEBSITE DEVELOPMENT + INTERNET MARKETING + SOCIAL MEDIA MARKETING</p>

      <div align={"center"}>
        <span style={{ border: '3px solid blue', color: 'blue', fontSize: '30px' }} align={"center"}> <b>Schedule a Consultation</b> </span>
      </div>


      <table align={"center"} width={800} height={250}>

        <tr>

          <th>
            <img src={img2} alt="error image loading" width={300} height={200} align={"left"} />

          </th>

          <th>
            <p align={"right"} style={{ transform: 'rotate(270deg)' }} > BRANDING SERVICES  </p>
          </th>

          <th>
            <h3 align={"right"}> DEFINE </h3>
            <h4 align={"right"}>WHAT MAKES YOU</h4>
            <h5 align={"right"}>UNIQUE</h5>
            <p align={"right"}>AND CREATE A RUSTED BRAND</p>
          </th>

          <th>
            <p align={"right"} style={{ writingMode: 'vertical-rl' }}> SCROLL------> </p>
          </th>

        </tr>

      </table>
      <hr />
      <div align={"right"}>
        <span style={{ border: '3px solid blue', color: 'blue' }} align={"right"}>
          Learn More
        </span>
      </div>


      <table align={"center"} width={800} height={230}>

        <tr>

          <th>
            <p align={"right"} style={{ writingMode: 'vertical-rl' }}> SCROLL------> </p>
          </th>

          <th>
            <h3 align={"left"}> ENERGIZE </h3>
            <h4 align={"left"}>THROUGH YOUR</h4>
            <h5 align={"left"}>CREATIVE LENSES</h5>
            <p align={"left"}>THE POWER OF CONTENT AND <br /> WHY YOUR BUSINESS NEES IT</p>
          </th>

          <th>
            <p align={"right"} style={{ transform: 'rotate(270deg)' }} > DIGITAL MEDIA  </p>
          </th>

          <th>
            <img src={img3} alt="error image loading" width={300} height={200} align={"right"} />
          </th>

        </tr>

      </table>
      <hr />
      <div align={"left"}>
        <span style={{ border: '3px solid blue', color: 'blue' }} align={"right"}>
          Learn More
        </span>
      </div>


      <table align={"center"} width={800} height={230}>

        <tr>

          <th>
            <img src={img4} alt="error image loading" width={300} height={200} align={"left"} />

          </th>

          <th>
            <p align={"right"} style={{ transform: 'rotate(270deg)' }} > WEBSITE DEVELOPMENT  </p>
          </th>

          <th>
            <h3 align={"right"}> DEFINE </h3>
            <h4 align={"right"}>WHAT MAKES YOU</h4>
            <h5 align={"right"}>UNIQUE</h5>
            <p align={"right"}>AND CREATE A RUSTED BRAND</p>
          </th>

          <th>
            <p align={"right"} style={{ writingMode: 'vertical-rl' }}> SCROLL------> </p>
          </th>

        </tr>

      </table>
      <hr />
      <div align={"right"}>
        <span style={{ border: '3px solid blue', color: 'blue' }} align={"right"}>
          Learn More
        </span>
      </div>

      <table align={"center"} width={800} height={230}>

        <tr>

          <th>
            <p align={"right"} style={{ writingMode: 'vertical-rl' }}> SCROLL------> </p>
          </th>

          <th>
            <h3 align={"left"}> ENERGIZE </h3>
            <h4 align={"left"}>THROUGH YOUR</h4>
            <h5 align={"left"}>CREATIVE LENSES</h5>
            <p align={"left"}>THE POWER OF CONTENT AND <br /> WHY YOUR BUSINESS NEES IT</p>
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
        <span style={{ border: '3px solid blue', color: 'blue' }} align={"right"}>
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
            <h3 align={"right"}> DEFINE </h3>
            <h4 align={"right"}>WHAT MAKES YOU</h4>
            <h5 align={"right"}>UNIQUE</h5>
            <p align={"right"}>AND CREATE A RUSTED BRAND</p>
          </th>

          <th>
            <p align={"right"} style={{ writingMode: 'vertical-rl' }}> SCROLL------> </p>
          </th>

        </tr>

      </table>
      <hr />
      <div align={"right"}>
        <span style={{ border: '3px solid blue', color: 'blue' }} align={"right"}>
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
      <hr />
      <table>
        <tr>
          <th width={300} style={{border: '2px solid blue'}}>
            <img src={img7a} alt="error image loading" width={250} height={200} />
            <p style={{width: '250px'}}>5 Reasons Website Development is a must</p>
            <p>29th March' 22</p>
            <hr />
            <p style={{width: '250px'}}>Website maintenance is like a check-up, an oil change or a teeth cleaning. If you aren't doint it regularly, things can go downhill fast. You don't designa and develop a website and then you're all done. you need to maintain your website if you want it to have any success...</p>
            <p>Read More</p>
          </th>
          <th width={300} style={{border: '2px solid blue'}}>
            <img src={img8} alt="error image loading" width={250} height={200}  />
            <p style={{width: '250px'}}>Website Information Architecture: 4 things you need to know</p>
            <p>20th March' 22</p>
            <hr />
            <p style={{width: '250px'}}>Are you wondering what website information architecture (IA) is all about? It's the practice of structuring, organizing, labeling, and presenting content to make it easy to find, understand, and use. Web users look for primary elements in a website. They want a clear presentation of what the company offers. Contact details, phone...</p>
            <p>Read More</p>
          </th>
          <th width={300} style={{border: '2px solid blue'}}>
            <img src={img9} alt="error image loading" width={250} height={200}  />
            <p style={{width: '250px'}}>Should you use Competitor research tools</p>
            <p>13th March' 22</p>
            <hr />
            <p style={{width: '250px'}}>Do you have any competitors that do SEO better than you do? Maybe you have a better product than your competitors, but they doa better job of promoting their products throught organic search. If that's the case, you may want to look into competiror research tools. These tools can...</p>
            <p>Read More</p>
          </th>
        </tr>
      </table>

      <h3>OUR CLIENTS</h3>
      <img src={TIC} alt="error image loading" width={250} height={200}  /><span>   </span>
      <img src={OLAEBAN} alt="error image loading" width={250} height={200}  /><span>   </span>
      <img src={CINTAP} alt="error image loading" width={250} height={200}  />
      <div style={{backgroundColor: 'black', color: 'white'}}>
        <p align={'center'}>SHOWCASE YOUR BRAND TO YOUR CUSTOMERS</p>
        <img src={logo} alt="logo image not loading" width={100} height={90} />
        SIGMAX MARKETING BRANDING + DIGITAL MEDIA + WEBSITE DEVELOPMENT + INTERNET MARKETING + SOCIAL MEDIA MARKETING
        <hr style={{border: '5px solid white'}} />
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