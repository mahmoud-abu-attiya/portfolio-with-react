import React, { Component } from 'react';
import './style.scss';
import img1 from "../../images/portfolio1.jpg"
import img2 from "../../images/portfolio7.jpg"
import img3 from "../../images/portfolio3.jpg"
import img4 from "../../images/portfolio4.jpg"
import img5 from "../../images/portfolio5.jpg"
import img6 from "../../images/portfolio6.jpg"
import img7 from "../../images/portfolio2.jpg"
import img8 from "../../images/portfolio8.jpg"

class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio'>
        <h2>Portfolio</h2>
        <div className="responsive-list">
          <div className='responsive-itms active'>all</div>
          <div className='responsive-itms'>html</div>
          <div className='responsive-itms'>photoshop</div>
          <div className='responsive-itms'>mobile</div>
        </div>
        <div className='container-fluidf row'>
          <div className='gallery col-6 col-sm-3'>
            <img src={img1} alt='gimg'></img>
            <div className='view-overlay'>
              <button className='btn btn-outline-light'>view pic</button>
            </div>
          </div>
          <div className='gallery col-6 col-sm-3'>
            <img src={img2} alt='gimg'></img>
            <div className='view-overlay'>
              <button className='btn btn-outline-light'>view pic</button>
            </div>
          </div>
          <div className='gallery col-6 col-sm-3'>
            <img src={img3} alt='gimg'></img>
            <div className='view-overlay'>
              <button className='btn btn-outline-light'>view pic</button>
            </div>
          </div>
          <div className='gallery col-6 col-sm-3'>
            <img src={img4} alt='gimg'></img>
            <div className='view-overlay'>
              <button className='btn btn-outline-light'>view pic</button>
            </div>
          </div>
          <div className='gallery col-6 col-sm-3'>
            <img src={img5} alt='gimg'></img>
            <div className='view-overlay'>
              <button className='btn btn-outline-light'>view pic</button>
            </div>
          </div>
          <div className='gallery col-6 col-sm-3'>
            <img src={img6} alt='gimg'></img>
            <div className='view-overlay'>
              <button className='btn btn-outline-light'>view pic</button>
            </div>
          </div>
          <div className='gallery col-6 col-sm-3'>
            <img src={img7} alt='gimg'></img>
            <div className='view-overlay'>
              <button className='btn btn-outline-light'>view pic</button>
            </div>
          </div>
          <div className='gallery col-6 col-sm-3'>
            <img src={img8} alt='gimg'></img>
            <div className='view-overlay'>
              <button className='btn btn-outline-light'>view pic</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Portfolio;
